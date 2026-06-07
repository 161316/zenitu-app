import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import JourneyDetail from "@/pages/JourneyDetail";
import ModuleDetail from "@/pages/ModuleDetail";
import Lesson from "@/pages/Lesson";
import Challenge from "@/pages/Challenge";
import Practice from "@/pages/Practice";
import Dictionary from "@/pages/Dictionary";
import WordDetail from "@/pages/WordDetail";
import Profile from "@/pages/Profile";
import Admin from "@/pages/Admin";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import VideoTemplate from "@/components/video/VideoTemplate";
import { motion } from "framer-motion";

function ThemeApplier({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div style={{ fontFamily: `'${theme.fontBody}', sans-serif` }}>
      {children}
    </div>
  );
}

const queryClient = new QueryClient();

const PUBLIC_PATHS = ["/esqueci-senha", "/recuperar-senha", "/video"];

function LoadingScreen() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(180deg, #0d0221 0%, #1a0533 100%)" }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="text-6xl mb-6"
      >
        🚀
      </motion.div>
      <p className="font-['Fredoka'] font-semibold text-2xl text-white mb-4 tracking-wide">ZENITU</p>
      <div
        className="w-8 h-8 rounded-full border-4 border-t-transparent animate-spin"
        style={{ borderColor: "rgba(167,139,250,0.3)", borderTopColor: "#a78bfa" }}
      />
    </div>
  );
}

function AppRoutes() {
  const { user, loading } = useAuth();
  const [location] = useLocation();

  if (loading) return <LoadingScreen />;

  if (PUBLIC_PATHS.some(p => location.startsWith(p))) {
    return (
      <Switch>
        <Route path="/esqueci-senha" component={ForgotPassword} />
        <Route path="/recuperar-senha" component={ResetPassword} />
        <Route path="/video" component={VideoTemplate} />
      </Switch>
    );
  }

  if (!user) return <Login />;

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jornada/:journeyId" component={JourneyDetail} />
      <Route path="/modulo/:id" component={ModuleDetail} />
      <Route path="/aula/:moduleId/:lessonId" component={Lesson} />
      <Route path="/pratica/:moduleId" component={Practice} />
      <Route path="/desafio/:moduleId" component={Challenge} />
      <Route path="/dicionario" component={Dictionary} />
      <Route path="/dicionario/:word" component={WordDetail} />
      <Route path="/perfil" component={Profile} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <ThemeApplier>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <AppRoutes />
            </WouterRouter>
          </ThemeApplier>
        </AuthProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
