const Score = require('../models/Score')

exports.addScore = async (req, res) => {
  try {
    const { userId, score, scoreDate } = req.body

    await Score.create({
      userId,
      score,
      scoreDate,
    })

    const scores = await Score.find({ userId }).sort({ scoreDate: -1 })

    if (scores.length > 5) {
      const oldestScore = scores[scores.length - 1]
      await Score.findByIdAndDelete(oldestScore._id)
    }

    const updatedScores = await Score.find({ userId }).sort({
      scoreDate: -1,
    })

    res.status(201).json(updatedScores)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

exports.getScores = async (req, res) => {
  try {
    const { userId } = req.params

    const scores = await Score.find({ userId }).sort({
      scoreDate: -1,
    })

    res.status(200).json(scores)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}