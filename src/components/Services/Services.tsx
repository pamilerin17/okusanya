import  { useState, useEffect } from 'react';
import { Monitor, Search, Target } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulated API call - replace with your actual API endpoint
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock API response - replace with actual fetch call
        // const response = await fetch('https://your-api.com/services');
        // const data = await response.json();
        
        const mockData: Service[] = [
          {
            id: 1,
            title: 'Development',
            description: 'I make use of HTML, CSS, SCSS and JavaScript to make interactive and functional frontend framework for businesses or other purposes.',
            icon: 'monitor'
          },
          {
            id: 2,
            title: 'Design',
            description: 'I create visually stunning and user-friendly designs that enhance user experience and bring your brand vision to life with modern aesthetics.',
            icon: 'search'
          },
          {
            id: 3,
            title: 'Git Control System',
            description: 'With the use of Git and GitHub, I can manage your websites, domains and make necessary improvements when the time comes.',
            icon: 'target'
          },

        ];
        
        setServices(mockData);
        setLoading(false);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load services';
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getIcon = (iconName: string) => {
    const iconProps = {
      size: 64,
      className: "text-blue-600 stroke-[1.5]"
    };
    
    switch (iconName) {
      case 'monitor':
        return <Monitor {...iconProps} />;
      case 'search':
        return <Search {...iconProps} />;
      case 'target':
        return <Target {...iconProps} />;
      default:
        return <Monitor {...iconProps} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-5xl font-normal text-gray-900 mb-20 tracking-tight">
            Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white border border-gray-200 rounded-xl p-16 animate-pulse">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-8"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto mb-5"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <p className="text-red-600 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl md:text-6xl font-normal text-gray-900 mb-20 tracking-tight">
         My <span className='text-blue-500'>Services</span> 
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-16 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 group"
            >
              <div className="w-20 h-20 mx-auto mb-8 transition-transform duration-300 group-hover:scale-110">
                {getIcon(service.icon)}
              </div>
              
              <h2 className="text-2xl font-medium text-gray-900 mb-5">
                {service.title}
              </h2>
              
              <p className="text-base leading-relaxed text-gray-400 font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;