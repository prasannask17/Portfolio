import React, { useEffect, useRef, useState } from 'react';

interface WebNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

interface WebConnection {
  from: WebNode;
  to: WebNode;
  strength: number;
}

const SpiderWebBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nodesRef = useRef<WebNode[]>([]);
  const connectionsRef = useRef<WebConnection[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initWeb = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 20000);
      nodesRef.current = [];
      connectionsRef.current = [];
      
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        nodesRef.current.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }

      createConnections();
    };

    const createConnections = () => {
      connectionsRef.current = [];
      
      for (let i = 0; i < nodesRef.current.length; i++) {
        const nodeA = nodesRef.current[i];
        
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const nodeB = nodesRef.current[j];
          const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
          
          if (distance < 120) {
            connectionsRef.current.push({
              from: nodeA,
              to: nodeB,
              strength: 1 - (distance / 120)
            });
          }
        }
      }
    };

    const drawWeb = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connectionsRef.current.forEach(connection => {
        const { from, to, strength } = connection;
        const mouseDistance = Math.hypot(
          (from.x + to.x) / 2 - mousePos.x,
          (from.y + to.y) / 2 - mousePos.y
        );
        
        const proximity = Math.max(0, 1 - mouseDistance / 150);
        const alpha = strength * 0.3 + proximity * 0.4;
        
        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.lineWidth = 0.5 + proximity;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });

      // Draw nodes
      nodesRef.current.forEach(node => {
        const mouseDistance = Math.hypot(node.x - mousePos.x, node.y - mousePos.y);
        const proximity = Math.max(0, 1 - mouseDistance / 100);
        const size = 1 + proximity * 2;
        
        ctx.fillStyle = `rgba(59, 130, 246, ${0.6 + proximity * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateNodes = () => {
      nodesRef.current.forEach(node => {
        const dx = mousePos.x - node.x;
        const dy = mousePos.y - node.y;
        const distance = Math.hypot(dx, dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100 * 0.003;
          const angle = Math.atan2(dy, dx);
          node.vx -= Math.cos(angle) * force;
          node.vy -= Math.sin(angle) * force;
        }
        
        // Spring back to original position
        const restoreForce = 0.002;
        node.vx += (node.originalX - node.x) * restoreForce;
        node.vy += (node.originalY - node.y) * restoreForce;
        
        node.x += node.vx;
        node.y += node.vy;
        
        node.vx *= 0.98;
        node.vy *= 0.98;
      });
    };

    const animate = () => {
      updateNodes();
      drawWeb();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      resizeCanvas();
      initWeb();
    };

    resizeCanvas();
    initWeb();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
};

export default SpiderWebBackground;