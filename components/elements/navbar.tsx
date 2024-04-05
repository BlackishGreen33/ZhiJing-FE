'use client';

import { motion } from 'framer-motion';
import { ClipboardPen, Lightbulb, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { scaleAnimation } from '@/animations/whileTapAnimations';

type BoxProps = {
  id: number;
  content: string;
  activeItemId: number;
  updateActiveItemId: (id: number) => void;
  role: 'student' | 'teacher';
};

type NavbarProps = {
  activeID: number;
  role: 'student' | 'teacher';
};

const Box: React.FC<BoxProps> = ({
  id,
  content,
  activeItemId,
  updateActiveItemId,
  role,
}) => {
  const handleClick = () => {
    updateActiveItemId(id);
  };

  const colorStyle: React.CSSProperties = {
    color: activeItemId === id ? '#327cc6' : '#9c9c9c',
  };

  const getHref = () => {
    if (role === 'student') {
      return id === 1 ? '/' : id === 2 ? '/student/solve' : '/student/analyze';
    } else if (role === 'teacher') {
      return id === 1
        ? '/teacher/dialogue'
        : id === 2
          ? '/teacher/solve'
          : '/teacher/analyze';
    }
    return 'student';
  };

  return (
    <Link href={getHref()} className="flex flex-1">
      <motion.div
        onClick={handleClick}
        style={colorStyle}
        className="flex flex-1 items-center justify-center"
        whileTap={scaleAnimation}
      >
        <div className="h-5vh flex flex-col items-center justify-center font-semibold">
          {id === 1 ? (
            <MessageCircleMore />
          ) : id === 2 ? (
            <Lightbulb />
          ) : (
            <ClipboardPen />
          )}
          <div className="text-xs">{content}</div>
        </div>
      </motion.div>
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = ({ activeID, role }) => {
  const navItems = [
    { id: 1, content: '对话' },
    { id: 2, content: '答疑區' },
    { id: 3, content: role === 'student' ? '学情分析' : '学生情况' },
  ];

  const [activeItemId, setActiveItemId] = useState(activeID);

  const updateActiveItemId = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div className="fixed bottom-0 flex h-[8vh] w-full flex-col">
      <div className="h-[0.1vh] w-full bg-gray-700"></div>
      <div className="flex h-[7.9vh] w-full">
        {navItems.map((item) => (
          <Box
            key={item.id}
            id={item.id}
            content={item.content}
            activeItemId={activeItemId}
            updateActiveItemId={updateActiveItemId}
            role={role}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
