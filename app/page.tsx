"use client";

import { motion } from 'framer-motion';
import { 
  Star, 
  Globe, 
  Heart,
  Search,
  Sparkles,
  School,
  Rocket,
  BookOpen,
  Trophy,
  Briefcase,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('students');

  const opportunities = [
    {
      icon: Trophy,
      title: "International Olympiads",
      description: "Math, Science, Robotics, and more",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Study Visits",
      description: "CERN, NASA, UN Youth Forums",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Arts & Writing Festivals",
      description: "International creative platforms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Summer Programs",
      description: "Elite programs at top universities",
      color: "from-orange-500 to-red-500"
    }
  ];

  const impactStories = [
    {
      name: "Sarah Chen",
      age: 16,
      from: "Birmingham",
      achievement: "International Math Olympiad Gold",
      story: "From a state school to representing Britain on the world stage",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Marcus Johnson",
      age: 17,
      from: "Manchester",
      achievement: "NASA Space Camp Graduate",
      story: "First in his family to pursue aerospace engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Priya Patel",
      age: 15,
      from: "Leicester",
      achievement: "Young Poet Laureate",
      story: "Published internationally after Edinburgh Festival",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Union Jack */}
              <div className="w-10 h-6 relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#012169]"></div>
                {/* White diagonal */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 40%, white 40%, white 60%, transparent 60%), linear-gradient(to top right, transparent 40%, white 40%, white 60%, transparent 60%)' }}></div>
                {/* Red diagonal */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 45%, #C8102E 45%, #C8102E 55%, transparent 55%), linear-gradient(to top right, transparent 45%, #C8102E 45%, #C8102E 55%, transparent 55%)' }}></div>
                {/* White cross */}
                <div className="absolute top-0 bottom-0 left-[45%] right-[45%] bg-white"></div>
                <div className="absolute left-0 right-0 top-[40%] bottom-[40%] bg-white"></div>
                {/* Red cross */}
                <div className="absolute top-0 bottom-0 left-[47%] right-[47%] bg-[#C8102E]"></div>
                <div className="absolute left-0 right-0 top-[43%] bottom-[43%] bg-[#C8102E]"></div>
              </div>
              <h1 className="text-2xl font-bold">
                <span className="text-[#012169]">Brilliant</span>
                <span className="text-gray-900">Britain</span>
                <span className="text-gray-500">.org</span>
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#identify" className="text-gray-700 hover:text-blue-600 transition">Identify</a>
              <a href="#opportunity" className="text-gray-700 hover:text-blue-600 transition">Opportunity</a>
              <a href="#sponsor" className="text-gray-700 hover:text-blue-600 transition">Sponsor</a>
              <a href="#impact" className="text-gray-700 hover:text-blue-600 transition">Impact</a>
              <button className="px-6 py-2 bg-[#012169] text-white rounded-full hover:bg-[#010f49] transition">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Unlocking </span>
              <span className="bg-gradient-to-r from-[#012169] to-[#C8102E] bg-clip-text text-transparent">
                Extraordinary Potential
              </span>
              <br />
              <span className="text-gray-900">From Every Postcode</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A national gateway for discovering gifted students from disadvantaged backgrounds, 
              pairing them with sponsors, and enabling global opportunities that schools alone cannot provide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('students')}
                className={`px-8 py-4 rounded-full font-semibold transition ${
                  activeTab === 'students' 
                    ? 'bg-[#012169] text-white' 
                    : 'bg-white text-[#012169] border-2 border-[#012169] hover:bg-blue-50'
                }`}
              >
                I&apos;m a Student
              </button>
              <button 
                onClick={() => setActiveTab('sponsors')}
                className={`px-8 py-4 rounded-full font-semibold transition ${
                  activeTab === 'sponsors' 
                    ? 'bg-[#C8102E] text-white' 
                    : 'bg-white text-[#C8102E] border-2 border-[#C8102E] hover:bg-red-50'
                }`}
              >
                I Want to Sponsor
              </button>
              <button 
                onClick={() => setActiveTab('schools')}
                className={`px-8 py-4 rounded-full font-semibold transition ${
                  activeTab === 'schools' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'
                }`}
              >
                I&apos;m a School
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Sparkles className="w-20 h-20 text-[#012169]" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Trophy className="w-24 h-24 text-[#C8102E]" />
        </div>
      </section>


      {/* Three Layers Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Three-Layer Model
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Identification */}
            <motion.div
              id="identify"
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
            >
              <div className="w-16 h-16 bg-[#012169] rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Identification</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#012169] mr-2">•</span>
                  Partner with schools and community groups
                </li>
                <li className="flex items-start">
                  <span className="text-[#012169] mr-2">•</span>
                  Spot talent in academics, arts, STEM, leadership
                </li>
                <li className="flex items-start">
                  <span className="text-[#012169] mr-2">•</span>
                  Use competitions and tests as indicators
                </li>
                <li className="flex items-start">
                  <span className="text-[#012169] mr-2">•</span>
                  Allow teacher and peer nominations
                </li>
              </ul>
            </motion.div>

            {/* Opportunity */}
            <motion.div
              id="opportunity"
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100"
            >
              <div className="w-16 h-16 bg-[#C8102E] rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Opportunity</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  Global experiences beyond reach
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  International competitions and festivals
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  Study visits to world-class institutions
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8102E] mr-2">•</span>
                  Secured placements through partnerships
                </li>
              </ul>
            </motion.div>

            {/* Sponsorship */}
            <motion.div
              id="sponsor"
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Sponsorship</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Connect with corporate sponsors
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Clear impact reporting for donors
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Community giving opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  See the growth of supported students
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Global Opportunities We Enable
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${opp.color} flex items-center justify-center mb-4`}>
                  <opp.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{opp.title}</h3>
                <p className="text-gray-600">{opp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Transforming Lives, Building Britain&apos;s Future
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{story.name}, {story.age}</h3>
                  <p className="text-gray-500 text-sm mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {story.from}
                  </p>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {story.achievement}
                  </div>
                  <p className="text-gray-700">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#012169] to-[#C8102E]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Talent is Universal, Opportunity is Not
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us in ensuring that brilliant minds from every background 
            can reach their full potential and contribute to Britain&apos;s future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#012169] rounded-full font-bold hover:bg-gray-100 transition flex items-center justify-center">
              Register Your School
              <School className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition flex items-center justify-center">
              Become a Sponsor
              <Briefcase className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-[#C8102E] fill-current" />
                <h3 className="text-xl font-bold">BrilliantBritain.org</h3>
              </div>
              <p className="text-gray-400">
                Investing in the future brilliance of Britain itself.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Students</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Apply Now</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Schools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white">Nomination Process</a></li>
                <li><a href="#" className="hover:text-white">Competition Calendar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Sponsors</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sponsor Portal</a></li>
                <li><a href="#" className="hover:text-white">Impact Reports</a></li>
                <li><a href="#" className="hover:text-white">Corporate Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 BrilliantBritain.org - Registered Charity No. 1234567</p>
            <p className="mt-2 text-sm">
              From Faraday to Turing, ordinary roots spark extraordinary impact.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}