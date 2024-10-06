import React from 'react'

const Molecule3D = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 soft-glow">Explore Molecular Structures</h2>
        <div className="relative w-full h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="water-molecule">
              <div className="atom oxygen"></div>
              <div className="atom hydrogen hydrogen-1"></div>
              <div className="atom hydrogen hydrogen-2"></div>
              <div className="bond bond-1"></div>
              <div className="bond bond-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Molecule3D