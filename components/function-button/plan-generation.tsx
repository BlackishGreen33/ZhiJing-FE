import { Clipboard } from '@capacitor/clipboard';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const PlanGeneration = () => {
  const [isClick, setIsClick] = useState(false);

  const mockPlan = `  教案标题：介绍二次函数
  课程类型：讲授型
  学生年级：7年级
  教学目标：
  1. 了解二次函数的定义和特点。
  2. 掌握二次函数的一般形式和顶点形式。
  3. 能够识别二次函数图像的特点和性质。
  教学内容：
  1. 二次函数的定义和形式。
  2. 二次函数的图像和性质。
  3. 二次函数的顶点形式和一般形式。
  教学步骤：
  4. 引入（5分钟）：
  生活场景举例：当一个物体自由落体时，其高度随时间变化的规律可以用二次函数来描述。考虑一个抛物线形状的溜滑梯，孩子从顶端滑下到底端。这个过程中，孩子的高度会随着时间的推移而变化。

  在这个例子中，孩子的高度 h 是时间 t 的二次函数。当孩子开始滑下时，高度逐渐减小，直到达到溜滑梯底部，此时高度为0。这样的运动规律可以用二次函数来描述，形式大致如下：

  h(t) = at^2 + bt + c

  其中，h(t) 表示时间 t 时孩子的高度，a、b 和 c 是常数，决定了抛物线的形状和位置。

  在这个生活中的例子中，孩子自由落体过程中的高度变化就是一个二次函数
  提出问题：你认为二次函数有哪些特点？
  5. 讲解（15分钟）：
  1. 二次函数的一般形式：
     - 介绍二次函数的一般形式 f(x) = ax^2 + bx + c，其中 a，b 和 c 是实数，a neq 0。
     - 解释二次函数图像的特点，包括抛物线的开口方向（向上还是向下）、顶点的位置等。

  2. 二次函数的图像：
     - 说明二次函数图像的对称性，即关于抛物线的对称轴。
     - 强调顶点是二次函数图像的最高点（当抛物线开口向下时）或最低点（当抛物线开口向上时）。

  3. 顶点形式和一般形式：
     - 讲解二次函数的顶点形式和一般形式之间的关系。顶点形式 f(x) = a(x - h)^2 + k 中的 (h, k) 就是抛物线的顶点。
     - 强调顶点形式方程的优势，它可以直接给出抛物线的顶点和开口方向。

  4. 示例分析：
     - 通过几个具体的例子，演示如何从一般形式转换为顶点形式，以及如何根据顶点形式方程来画出抛物线的图像。
     - 解释如何根据顶点的位置和抛物线的开口方向来确定二次函数的各项系数。

  5. 注意事项：
     - 提醒学生注意二次函数的特殊情况，例如当 a > 0 时，抛物线开口向上；当 a < 0 时，抛物线开口向下。
     - 强调学生需要理解二次函数的图像特点，以及如何从函数的方程中读取这些信息。
  6. 示例演练（15分钟）：

  转换为顶点形式：
    - 给出一个二次函数的一般形式 f(x) = 2x^2 - 8x + 6，并说明如何将其转换为顶点形式。
    - 首先，计算顶点的横坐标 h：h = frac{-b}{2a} = frac{-(-8)}{2 cdot 2} = 2
    - 然后，将横坐标 h 代入到函数中求得纵坐标 k：k = f(h) = 2(2)^2 - 8(2) + 6 = 2
    - 因此，顶点为 (2, 2)，抛物线开口向上。
    - 得到顶点形式方程为：f(x) = 2(x - 2)^2 + 2

  绘制抛物线图像：
    - 使用顶点 (2, 2) 和开口方向来绘制抛物线的图像。
    - 根据顶点形式方程，我们知道抛物线在 x = 2 处达到最高点，且开口向上。
    - 将顶点 (2, 2) 作为抛物线的顶点，并画出抛物线的形状。
    - 可以进一步计算其他点的坐标，并绘制出更多的点来完整绘制抛物线的图像。

  练习训练：
    - 提供一些类似的二次函数，并让学生尝试将其转换为顶点形式，并绘制出对应的抛物线图像。
    - 鼓励学生自己计算顶点和确定抛物线的开口方向，并在绘制图像时进行验证。

  7. 练习与讨论（10分钟）：
  - 分发练习题，让学生独立完成，并在完成后进行讨论和解答疑问。
  - 强调理解和掌握二次函数的基本概念和性质。
  8. 总结（5分钟）：
  - 回顾本节课的重点内容，强调学习要点。
  - 鼓励学生在课后进行复习和巩固。
  教学资源：
  - PowerPoint幻灯片或白板演示。
  - 练习题和答案。
  评估方法：
  - 课堂练习的完成情况。
  - 学生对概念的理解和应用能力。
  扩展活动：
  - 提供额外的练习题和挑战题，以拓展学生的知识和能力。
  `;

  const handleCopyPlan = async () => {
    await Clipboard.write({
      string: mockPlan,
    });
  };

  return (
    <div className="flex h-[4.5vh] w-full items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="absolute left-[3%] h-[3vh] w-[20%] border-0 p-0"
            variant="default"
            size="sm"
          >
            教案生成
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>教案生成</DialogTitle>
            <DialogDescription>请填写以下信息</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {isClick ? (
              <Textarea className="h-[50vh]" readOnly>
                {mockPlan}
              </Textarea>
            ) : (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="text" className="text-right">
                    教学内容
                  </Label>
                  <Textarea
                    id="text"
                    placeholder="请输入教学内容"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="text" className="text-right">
                    学生年级
                  </Label>
                  <Input
                    id="text"
                    placeholder="请输入学生年级"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="text" className="text-right">
                    课程类型
                  </Label>
                  <Input
                    id="text"
                    placeholder="请输入课程类型"
                    className="col-span-3"
                  />
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            {isClick ? (
              <Button onClick={handleCopyPlan}>复制到剪贴板</Button>
            ) : (
              <Button type="submit" onClick={() => setIsClick(!isClick)}>
                生成教案
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlanGeneration;
