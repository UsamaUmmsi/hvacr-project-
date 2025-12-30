import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About CoolAir HVACR</h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Leading HVACR solutions provider with over 15 years of excellence in heating, ventilation, air conditioning, and refrigeration services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop"
              alt="HVAC Technicians"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2008, CoolAir started as a small family-owned HVAC repair service. Today, we've grown into a premier HVACR solutions provider, serving thousands of satisfied residential and commercial clients.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to excellence, continuous training, and adoption of the latest technologies has made us the trusted choice for HVACR services in the region.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-gray-900">Certified</div>
                  <div className="text-gray-600 text-sm">NATE Certified Techs</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-gray-900">5000+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 text-white">
            <Target className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To provide exceptional HVACR solutions that ensure comfort, efficiency, and reliability for every client, while setting new standards in service excellence and customer satisfaction.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary to-green-600 rounded-2xl p-8 text-white">
            <Heart className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To be the most trusted HVACR service provider recognized for innovation, quality, and commitment to creating comfortable and sustainable environments.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">Honest recommendations and transparent pricing in every interaction.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-600">On-time service, 24/7 availability, and dependable solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Award className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">Highest quality workmanship and continuous improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About