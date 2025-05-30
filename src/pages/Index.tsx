
import { Shield, Users, Heart, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5b9fefa0-3dca-45a4-b0cc-0fa1d596bb6d.png" 
                alt="Health Pro Assist" 
                className="h-10 w-auto"
              />
            </div>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Contact Support
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-red-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-red-400" />
                <h1 className="text-5xl font-bold">Meet Ranger</h1>
              </div>
              <p className="text-xl text-blue-100 mb-4">
                Your AI-powered advocate for veteran services and support
              </p>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Ranger is a steadfast, mission-driven virtual assistant trained to serve those who have served. 
                Available 24/7 to help you navigate VA benefits, mental health resources, housing assistance, 
                and everything in between—with the respect and understanding you've earned.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Talk to Ranger Now
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-blue-400 rounded-full blur-xl opacity-30"></div>
                <img 
                  src="/lovable-uploads/9427bf39-2a78-4e97-879a-67b4d614c116.png" 
                  alt="Ranger AI Avatar" 
                  className="relative h-64 w-64 rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Ranger Does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ranger Has Your Six</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From benefits navigation to crisis support, Ranger provides specialized assistance 
              designed specifically for veterans and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-red-700">VA Benefits & Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Navigate disability claims, healthcare services, education benefits, 
                  and housing assistance with expert guidance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Heart className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-700">Mental Health Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Access PTSD resources, crisis de-escalation, peer networks, 
                  and substance recovery programs with judgment-free support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-red-700">Family & Caregiver Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Support for spouses, caregivers, and dependents with specialized 
                  resources and community connections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-red-700">Employment & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Find job opportunities, retraining programs, and career transition 
                  support tailored for veterans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Phone className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-700">Crisis Intervention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Immediate support and escalation to live counselors when you need it most. 
                  Always available, always confidential.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-red-700">Community Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Connect with peer groups, local veteran organizations, 
                  and community reintegration programs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use Ranger */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Connect with Ranger</h2>
            <p className="text-xl text-gray-600">
              Getting help is simple. Ranger speaks your language and meets you where you are.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Start the Conversation</h3>
                  <p className="text-gray-700">
                    Simply click "Talk to Ranger" or use the voice interface. You can speak naturally—
                    no scripts, no complicated forms. Just tell Ranger what you need.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Situation</h3>
                  <p className="text-gray-700">
                    Ranger understands the veteran experience. Whether you're dealing with claims, 
                    housing issues, job transitions, or personal struggles—speak plainly. He gets it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Connected</h3>
                  <p className="text-gray-700">
                    Ranger will guide you to the right resources, help you navigate systems, 
                    or connect you with live support when needed. He follows through—no dead ends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">In Crisis?</h3>
              <p className="mb-4">
                If you're having thoughts of self-harm or need immediate help, 
                Ranger will immediately connect you with a live crisis counselor.
              </p>
              <p className="text-sm">
                "Alright. I hear you. I'm going to get someone on the line who can help right now—just hang with me for a moment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ranger is standing by, ready to serve those who have served. 
            No judgment, no runaround—just the support you've earned.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-12 py-4 text-xl font-semibold">
            <MessageCircle className="mr-3 h-6 w-6" />
            Talk to Ranger Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="/lovable-uploads/5b9fefa0-3dca-45a4-b0cc-0fa1d596bb6d.png" 
                alt="Health Pro Assist" 
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">
                Providing AI-powered support and advocacy for veterans and their families.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Resources</h4>
              <div className="space-y-2 text-gray-400">
                <p>Veterans Crisis Line: 1-800-273-8255</p>
                <p>Crisis Text Line: Text 838255</p>
                <p>Emergency: 911</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Health Pro Assist. Serving those who served.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
