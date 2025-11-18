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
    { name: "Vue.js / Next.js", level: 85 },
    { name: "UI/UX", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "Tailwind CSS", level: 50 },
    { name: "React", level: 60 },
    { name: "PrimeVue", level: 80 },
    { name: "Entity Framework", level: 50 },
    { name: "LuigiClient", level: 60 },
    { name: "Python", level: 50 },
    { name: "TypeScript", level: 50 },
    { name: "JavaScript", level: 80 },
    { name: "C#", level: 60 },
    { name: "PHP", level: 50 },
    { name: "HTML5", level: 60 },
    { name: "Tailwind CSS", level: 80 },
    { name: "PrimeFlex", level: 80 },
    { name: "AWS (APIs, Luigi),", level: 80 },
    { name: "Docker", level: 50 },
    { name: "MySQL", level: 80 },
    { name: "SAP HANA Cloud", level: 30 },
    { name: "Intelisis", level: 70 },
    { name: "SAP BAPI/CPI", level: 60 },
    { name: "JWT Authentication", level: 80 },
    { name: "Scrum", level: 90 },
    { name: "Requirements Analysis", level: 95 },
    { name: "Technical/Functional Documentation", level: 95 },
    { name: "Collections", level: 80 },
    { name: "Credit", level: 50 },
    { name: "HR", level: 50 },
    { name: "Sales", level: 70 },
    { name: "Legal HR Management", level: 80 },
  ];


const chartData = {
  labels: ['Frontend', 'UI/UX', 'Backend', '3D/Animation', 'Arquitectura'],
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