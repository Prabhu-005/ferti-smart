import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, TrendingUp, Shield, ArrowRight } from "lucide-react";
import SoilTestForm from "@/components/SoilTestForm";
import RecommendationResults from "@/components/RecommendationResults";
import FertiSmartLogo from "@/components/FertiSmartLogo";
import heroImage from "@/assets/hero-soil.jpg";

interface SoilTestData {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
  cropType: string;
}

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [testResults, setTestResults] = useState<SoilTestData | null>(null);

  const handleTestSubmit = (data: SoilTestData) => {
    setTestResults(data);
    setShowForm(false);
  };

  const handleReset = () => {
    setTestResults(null);
    setShowForm(false);
  };

  if (testResults) {
    return <RecommendationResults data={testResults} onReset={handleReset} />;
  }

  if (showForm) {
    return <SoilTestForm onSubmit={handleTestSubmit} onBack={() => setShowForm(false)} />;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <FertiSmartLogo size="lg" />
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <Button 
                onClick={() => setShowForm(true)}
                className="gradient-primary text-white"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Healthy soil in farmer's hands" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="mb-8">
              <FertiSmartLogo size="xl" className="justify-center mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Smart Fertilizer Recommendations
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Based on Your Soil
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your soil test results into precise fertilizer recommendations. 
              Save costs, boost yields, and maintain long-term soil health with science-backed guidance.
            </p>
            <Button 
              size="lg" 
              onClick={() => setShowForm(true)}
              className="gradient-primary text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-strong transition-smooth hover:scale-105"
            >
              Start Soil Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Use Our Tool?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Data-driven decisions for sustainable agriculture
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:scale-105 border-0 animate-fade-in">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-soft">
                <Sprout className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precise Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get accurate deficiency detection by comparing your soil test results with crop-specific nutrient requirements.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:scale-105 border-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 shadow-soft">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save Money</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apply only the fertilizers you need. Avoid overuse and reduce costs while maximizing crop yield potential.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:scale-105 border-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 shadow-soft">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Soil Health</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintain balanced nutrition and promote long-term soil fertility with sustainable fertilizer practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 gradient-hero">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6 gradient-card shadow-soft border-0 hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold text-white flex-shrink-0 shadow-soft">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Enter Soil Test Data</h3>
                  <p className="text-muted-foreground">
                    Input your laboratory soil test results including Nitrogen (N), Phosphorus (P), Potassium (K), and pH levels.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-soft border-0 hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-white flex-shrink-0 shadow-soft">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Automated Analysis</h3>
                  <p className="text-muted-foreground">
                    Our system compares your values against optimal ranges for your selected crop and identifies nutrient deficiencies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card shadow-soft border-0 hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-white flex-shrink-0 shadow-soft">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Get Recommendations</h3>
                  <p className="text-muted-foreground">
                    Receive clear, actionable fertilizer recommendations with specific types and quantities needed for optimal results.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => setShowForm(true)}
              className="gradient-primary text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-strong transition-smooth hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
