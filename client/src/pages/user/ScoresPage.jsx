import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { addScore, getScores } from '../../services/scoreService'

export default function ScoresPage() {
  const user = JSON.parse(localStorage.getItem('user'))

  const [formData, setFormData] = useState({
    score: '',
    scoreDate: '',
  })

  const [scores, setScores] = useState([])

  const fetchScores = async () => {
    try {
      const response = await getScores(
        user?._id || '661f2d8a6c8b4d1f9c123456'
      )
      setScores(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user?._id) {
      fetchScores()
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.score || !formData.scoreDate) {
      alert('Please enter score and date')
      return
    }

    try {
      await addScore({
        userId: user?._id || '661f2d8a6c8b4d1f9c123456',
        score: Number(formData.score),
        scoreDate: formData.scoreDate,
      })

      setFormData({
        score: '',
        scoreDate: '',
      })

      fetchScores()
      alert('Score added successfully')
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add score')
    }
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#070B18] p-8 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-4xl font-bold">My Scores</h1>
              <p className="mt-2 text-slate-400">
                Add your latest golf scores. Only the last 5 scores are saved.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="mb-6 text-2xl font-bold">Add New Score</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Stableford Score
                  </label>
                  <input
                    type="number"
                    name="score"
                    min="1"
                    max="45"
                    placeholder="Enter score"
                    value={formData.score}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none transition focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Score Date
                  </label>
                  <input
                    type="date"
                    name="scoreDate"
                    value={formData.scoreDate}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4 text-white outline-none transition focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 py-4 font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:scale-[1.02]"
                >
                  Save Score
                </button>
              </form>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Latest Scores</h2>

                <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                  {scores.length}/5 Scores
                </span>
              </div>

              <div className="space-y-4">
                {scores.length > 0 ? (
                  scores.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1225] px-5 py-4"
                    >
                      <div>
                        <h3 className="text-2xl font-bold">
                          {item.score} Points
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                          {new Date(item.scoreDate).toLocaleDateString()}
                        </p>
                      </div>

                      <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300">
                        Stableford
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-slate-400">
                    No scores added yet
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}