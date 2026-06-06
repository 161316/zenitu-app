import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import JourneyDetail from "@/pages/JourneyDetail";
import ModuleDetail from "@/pages/ModuleDetail";
import Lesson from "@/pages/Lesson";
import Challenge from "@/pages/Challenge";
import Dictionary from "@/pages/Dictionary";
import WordDetail from "@/pages/WordDetail";
import Profile from "@/pages/Profile";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jornada/:journeyId" component={JourneyDetail} />
      <Route path="/modulo/:id" component={ModuleDetail} />
      <Route path="/aula/:moduleId/:lessonId" component={Lesson} />
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
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
