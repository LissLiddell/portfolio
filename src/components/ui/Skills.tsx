'use client';
import { useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { useAnimations } from '../../hooks/useAnimations';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillsData = [
  { name: 'Vue.js', level: 95 },
  { name: 'React/Next.js', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Three.js', level: 85 },
  { name: 'Node.js', level: 82 },
  { name: 'AWS', level: 78 },
  { name: 'UI/UX Design', level: 90 },
];

const chartData = {
  labels: ['Frontend', 'UI/UX', 'Backend', '3D/Animation', 'DevOps', 'Arquitectura'],
  datasets: [{
    label: 'Competencias',
    data: [95, 90, 82, 85, 78, 88],
    fill: true,
    backgroundColor: 'rgba(124, 58, 237, 0.2)',
    borderColor: '#7C3AED',
    pointBackgroundColor: '#D946EF',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#A78BFA'
  }]
};

const chartOptions = {
  scales: {
    r: {
      angleLines: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      pointLabels: {
        color: 'rgba(255, 255, 255, 0.7)',
        font: {
          family: "'Inter', sans-serif"
        }
      },
      ticks: {
        backdropColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

export default function Skills() {
  const { animateSkillBars } = useAnimations();

  useEffect(() => {
    setTimeout(() => {
      animateSkillBars();
    }, 500);
  }, [animateSkillBars]);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          Mis <span className="text-[#D946EF]">Skills</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h-96">
              <Radar data={chartData} options={chartOptions} />
            </div>
          </div>
          
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#A78BFA] text-sm">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      transform: 'scaleX(0)',
                      width: `${skill.level}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}