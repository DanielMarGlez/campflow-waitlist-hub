import { WaitlistForm } from "@/components/WaitlistForm";
import leafLogo from "@/assets/leaf-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-radial)] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-12 text-center">
        {/* Logo and Brand */}
        <div className="space-y-8 opacity-0 animate-slide-up">
          <div className="flex items-center justify-center gap-4">
            <img 
              src={leafLogo} 
              alt="CampFlow Logo" 
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold text-primary tracking-tight">
              CampFlow
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/90 font-medium">
              Optimiza la gestión de tus campamentos
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 opacity-0 animate-slide-up animate-delay-200">
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La plataforma definitiva para gestionar tus campamentos y viajes. 
            Desde la planificación hasta la ejecución, te tenemos cubierto.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Planificación Inteligente</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Actualizaciones en Tiempo Real</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Diseñado para la utilidad</span>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="opacity-0 animate-slide-up animate-delay-400">
          <WaitlistForm />
        </div>

        {/* Footer */}
        <footer className="pt-12 opacity-0 animate-fade-in animate-delay-400">
          <p className="text-sm text-muted-foreground">
            Próximamente • Obtén acceso anticipado uniéndote a nuestra lista de espera
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
