import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
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
import { motion } from "framer-motion";

const queryClient = new QueryClient();

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 to-purple-800 flex flex-col items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-6xl mb-4"
      >
        🏢
      </motion.div>
      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  );
}

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen />;
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <AppRoutes />
          </WouterRouter>
        </AuthProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
