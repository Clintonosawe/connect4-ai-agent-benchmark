# connect4-ai-agent-benchmark
Interactive Connect Four AI platform comparing Minimax, Alpha-Beta Pruning, Expectiminimax, and Google Gemini through real-time gameplay and performance benchmarking.

# Connect4 AI Agent Benchmark

An interactive **Connect Four AI platform** for comparing classical adversarial search algorithms with an LLM-based agent.

The project implements **Minimax, Alpha-Beta Pruning, Expectiminimax, and Google Gemini** and evaluates how different AI strategies perform across gameplay scenarios, search depths, and board sizes.

## Features

- Play **Human vs. AI** or watch **AI vs. AI**
- Minimax adversarial search
- Alpha-Beta Pruning optimization
- Expectiminimax for probabilistic decision-making
- Google Gemini API integration as an LLM-based game agent
- Configurable AI search depth
- Multiple board sizes
- Real-time AI decision visualization
- Performance logging and CSV export
- Algorithm benchmarking by execution time, nodes evaluated, and win rate

## Tech Stack

**Frontend**
- React
- TypeScript
- Vite

**AI / Algorithms**
- Minimax
- Alpha-Beta Pruning
- Expectiminimax
- Google Gemini API

**Data Analysis**
- Python
- Pandas
- Matplotlib

## How It Works

The application separates the game engine, UI, AI algorithms, and
performance evaluation system.

                    Connect4 Game
                         |
                  Game Controller
                  /      |       \
                 /       |        \
              Human   AI Engine   Logger
                        |
          +-------------+-------------+
          |             |             |
       Minimax      Alpha-Beta   Expectiminimax
          |
      Gemini Agent
