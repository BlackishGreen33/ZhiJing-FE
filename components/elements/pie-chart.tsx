'use client';

import * as Echarts from 'echarts';
import { MutableRefObject, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

type EChartsOption = echarts.EChartsOption;
type BoxSizingValue = 'content-box' | 'border-box' | 'initial' | 'inherit';
type StyleType = {
  boxSizing: BoxSizingValue;
};
type PieChartProps = {
  title: string;
  subTitle: string;
  seriesName: string;
  className?: string;
  data: Array<{ name: string; value: number }>;
};

const style: StyleType = {
  boxSizing: 'border-box',
};

const PieChart: React.FC<PieChartProps> = ({
  title,
  subTitle,
  seriesName,
  className,
  data,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartpie: MutableRefObject<any> = useRef(null);

  const pieOption: EChartsOption = {
    title: {
      text: title,
      subtext: subTitle,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: seriesName,
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const chartInit = () => {
    const mychartpie = Echarts.init(chartpie.current);
    mychartpie.setOption(pieOption, true);

    window.onresize = () => {
      mychartpie.resize();
    };
  };

  useEffect(() => {
    chartInit();

    return () => {
      window.onresize = null;
    };
  }, [chartInit]);

  return (
    <div
      ref={chartpie}
      style={style}
      className={cn('h-[50vh] w-full p-2', className)}
    ></div>
  );
};

export default PieChart;
