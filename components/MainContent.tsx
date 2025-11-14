import React from 'react';
import Card from './Card';

const MainContent: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl w-full">
      <div className="space-y-8">
        <div style={{ animationDelay: '0s' }} className="card-animation">
            <Card title="الخطوة الأولى: منصة كاريو" icon="academic-cap">
            <p className="mb-4 text-lg text-gray-300">
                ابدأ رحلتك من هنا عبر الدخول إلى منصة كاريو التعليمية. هذه هي بوابتك الرئيسية للتدريب والامتحانات.
            </p>
            <a
                href="https://af-portal.qureo.education/logi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                الذهاب إلى المنصة
            </a>
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <h4 className="flex items-center font-bold text-amber-400 text-xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                نصيحة ذهبية
                </h4>
                <p className="text-gray-300">
                إذا واجهت سؤالاً صعباً، لا تتردد في استخدام زر "تلميحات". الضغط عليه مرتين أو ثلاث سيكشف لك الإجابة الكاملة. الهدف هو تعلم الطريقة وليس فقط حل السؤال الحالي. استوعب الفكرة وانطلق!
                </p>
            </div>
            </Card>
        </div>

        <div style={{ animationDelay: '0.3s' }} className="card-animation">
            <Card title="الخطوة الثانية: فيديوهات المذاكرة" icon="video-camera">
            <p className="mb-4 text-lg text-gray-300">
                هذه القائمة من الفيديوهات هي مرشدك الأمين. اتبعها بالترتيب المحدد، فكل فيديو يبني على الذي قبله لضمان فهمك الكامل واستعدادك التام لكل امتحان.
            </p>
            <a
                href="https://youtube.com/playlist?list=PLDOC-6PPmsroxuDXDkKM75My7FvR7ueX-&si=olrQ3sALzXzEbbyY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-red-500/20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                مشاهدة قائمة التشغيل
            </a>
            </Card>
        </div>

      </div>
    </main>
  );
};

export default MainContent;