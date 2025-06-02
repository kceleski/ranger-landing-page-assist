import { Shield, Users, Heart, Phone, MessageCircle, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5b9fefa0-3dca-45a4-b0cc-0fa1d596bb6d.png" 
                alt="Health Pro Assist" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm">
              <span className="hidden sm:inline">healthproassist.com</span>
              <span className="sm:hidden">Chat with Ranger!</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Parallax Background Flag */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src="/placeholder/tattered-flag.svg" 
            alt="American Flag Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 sm:mb-6 py-2">
                  <div className="p-2 bg-red-600 rounded-lg">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight pb-2">
                    Ranger
                  </h1>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-100">
                  Your AI-powered advocate for veteran services
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Available 24/7 to help navigate VA benefits, mental health resources, 
                  housing assistance, and everything in between—with the respect and understanding you've earned.
                </p>
              </div>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl hover:shadow-red-500/25 transition-all duration-300 group">
                <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Ranger is Ready for Your SitRep! Bottom Right Corner!</span>
                <span className="sm:hidden">Chat with Ranger Now!</span>
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right Content - Tattered Flag */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div 
                className="relative"
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-blue-400 to-red-400 rounded-lg blur-3xl opacity-30 scale-110"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 flag-wave">
                  <img 
                    src="/placeholder/tattered-flag.svg" 
                    alt="Tattered American Flag" 
                    className="relative h-48 w-72 sm:h-64 sm:w-96 lg:h-80 lg:w-120 shadow-2xl rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <div className="h-full w-full bg-gradient-to-r from-blue-50 to-red-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Ranger Has Your Six</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              From benefits navigation to crisis support, Ranger provides specialized assistance 
              designed specifically for veterans and their families.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 bg-white">
              <CardHeader className="pb-4">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4 group-hover:bg-blue-100 transition-colors">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">VA Benefits & Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Navigate disability claims, healthcare services, education benefits, 
                  and housing assistance with expert guidance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200 bg-white">
              <CardHeader className="pb-4">
                <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-100 transition-colors">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">Mental Health Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Access PTSD resources, crisis de-escalation, peer networks, 
                  and substance recovery programs with judgment-free support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 bg-white sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4 group-hover:bg-blue-100 transition-colors">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">Family & Caregiver Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Support for spouses, caregivers, and dependents with specialized 
                  resources and community connections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200 bg-white">
              <CardHeader className="pb-4">
                <div className="p-3 bg-green-50 rounded-xl w-fit mb-4 group-hover:bg-green-100 transition-colors">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">Employment & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Find job opportunities, retraining programs, and career transition 
                  support tailored for veterans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200 bg-white">
              <CardHeader className="pb-4">
                <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-100 transition-colors">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">Crisis Intervention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Immediate support and escalation to live counselors when you need it most. 
                  Always available, always confidential.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 bg-white">
              <CardHeader className="pb-4">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4 group-hover:bg-blue-100 transition-colors">
                  <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">Community Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Connect with peer groups, local veteran organizations, 
                  and community reintegration programs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="h-full w-full bg-gradient-to-br from-blue-100 to-red-100"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">How to Connect with Ranger</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Getting help is simple. Ranger speaks your language and meets you where you are.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Start the Conversation</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Simply click "Talk to Ranger" or use the voice interface. You can speak naturally—
                    no scripts, no complicated forms. Just tell Ranger what you need.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-red-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Share Your Situation</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Ranger understands the veteran experience. Whether you're dealing with claims, 
                    housing issues, job transitions, or personal struggles—speak plainly. He gets it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Get Connected</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Ranger will guide you to the right resources, help you navigate systems, 
                    or connect you with live support when needed. He follows through—no dead ends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-red-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">In Crisis?</h3>
              <p className="text-base sm:text-lg mb-3 sm:mb-4 leading-relaxed">
                If you're having thoughts of self-harm or need immediate help, 
                Ranger will immediately connect you with a live crisis counselor.
              </p>
              <p className="text-red-100 italic text-base sm:text-lg">
                "Alright. I hear you. I'm going to get someone on the line who can help right now—just hang with me for a moment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        >
          <div className="h-full w-full bg-gradient-to-r from-red-500/20 to-blue-500/20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Connect?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto px-4">
            Ranger is standing by, ready to serve those who have served. 
            No judgment, no runaround—just the support you've earned.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 group">
            <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Click the Avatar in the Bottom Right Corner to Chat with Ranger Now!</span>
            <span className="sm:hidden">Chat with Ranger Now!</span>
            <ChevronRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-900 py-12 sm:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <img 
                src="/lovable-uploads/5b9fefa0-3dca-45a4-b0cc-0fa1d596bb6d.png" 
                alt="Health Pro Assist" 
                className="h-8 sm:h-10 w-auto mb-4 sm:mb-6"
              />
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Providing AI-powered support and advocacy for veterans and their families.
              </p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900">Emergency Resources</h4>
              <div className="space-y-3 sm:space-y-5 text-gray-600 text-base sm:text-lg">
                <p className="hover:text-slate-900 transition-colors">Veterans Crisis Line: Dial 9-8-8</p>
                <p className="hover:text-slate-900 transition-colors">Crisis Text Line: Text 9-8-8</p>
                <p className="hover:text-slate-900 transition-colors">Emergency: 9-1-1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-base sm:text-lg">&copy; 2025 Health Pro Assist. Serving those who served.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
