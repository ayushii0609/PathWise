
function App(){
  return (
      <div className="min-h-screen bg-white text-slate-900">
          <nav className="flex items-center justify-between border-b border-slate-200 px-8 py-5">
              <h1 className="text-2xl font-bold">
                  PathWise
              </h1>

              <div className="flex items-center gap-8">
                  <a href="#how-it-works"
                     className="text-sm text-slate-600 hover:text-slate-900">
                      How It Works
                  </a>

                  <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
                      Get Started
                  </button>
              </div>
          </nav>

          <main>
              <section className="mx-auto max-w-5xl px-6 py-24 text-center">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                      Study abroad, with clarity
                  </p>
                  <h2 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight">
                      Find a study path that fits you.
                  </h2>

                  <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                      Turn your academics, interests, preferences, and budget into explainable undergraduate study pathways.
                  </p>

                  <button className="mt-8 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-700">
                      Build My Profile
                  </button>

                  <div className="mt-8 flex justify-center gap-3 text-sm text-slate-500">
                      <span>Germany</span>
                      <span>•</span>
                      <span>USA</span>
                      <span>•</span>
                      <span>Explainable recommendations</span>
                  </div>
              </section>

              <section id="how-it-works"
                       className="border-t border-slate-200 bg-slate-50 px-6 py-20">
                  <div className="mx-auto max-w-5xl">
                      <div className="text-center">
                          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                              How it Works
                          </p>

                          <h2 className="mt-3 text-3xl font-bold">
                              From your profile to a clearer study path
                          </h2>
                      </div>

                      <div className="mt-12 grid gap-6 md:grid-cols-3">
                          <div className="rounded-xl border border-slate-200 bg-white p-6">
                              <p className="text-sm font-semibold text-blue-600">01</p>
                              <h3 className="mt-3 text-xl font-semibold">
                                  Build your profile
                              </h3>
                              <p className="mt-3 leading-7 text-slate-600">
                                  Add your academics, interests, study preferences, and budget.
                              </p>
                          </div>

                          <div className="rounded-xl border border-slate-200 bg-white p-6">
                              <p className="text-sm font-semibold text-blue-600">02</p>
                              <h3 className="mt-3 text-xl font-semibold">
                                  Understand your fit
                              </h3>
                              <p className="mt-3 leading-7 text-slate-600">
                                  See which requirements you satisfy, which are missing, and which
                                  still need verification.
                              </p>
                          </div>

                          <div className="rounded-xl border border-slate-200 bg-white p-6">
                              <p className="text-sm font-semibold text-blue-600">03</p>
                              <h3 className="mt-3 text-xl font-semibold">
                                  Compare your options
                              </h3>
                              <p className="mt-3 leading-7 text-slate-600">
                                  Compare programs, pathways, and estimated costs using the same
                                  structured profile.
                              </p>
                          </div>

                      </div>
                  </div>
              </section>
          </main>
      </div>
  )
}

export default App;