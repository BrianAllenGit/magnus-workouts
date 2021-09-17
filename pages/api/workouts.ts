// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Workout = {
  date: Date,
  steps: Array<Step>
}

type Step = {
  order: string,
  value: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Workout>>
) {
  const response = [
    {
      date: new Date(),
      steps: [
        {
          order: "a",
          value: "EMOM for 7 min: 2-posi hang clean (hips, knee) x 2 @ 65%"
        },
        {
          order: "b1",
          value: "Underhand Barbell Row: 3x8"
        },
        {
          order: "b2",
          value: "Ring Dip: 3x6-10; rest 45 sec"
        },
        {
          order: "c",
          value: "Prowler Shuttle Sprints: 4 sets @ 50-90lbs"
        },
        {
          order: "d",
          value: "Stretch"
        }
      ]
    },
    {
      date: new Date(),
      steps: [
        {
          order: "a",
          value: "EMOM for 7 min: 2-posi hang clean (hips, knee) x 2 @ 65%"
        },
        {
          order: "b1",
          value: "Underhand Barbell Row: 3x8"
        },
        {
          order: "b2",
          value: "Ring Dip: 3x6-10; rest 45 sec"
        },
        {
          order: "c",
          value: "Prowler Shuttle Sprints: 4 sets @ 50-90lbs"
        },
        {
          order: "d",
          value: "Stretch"
        }
      ]
    },
    {
      date: new Date(),
      steps: [
        {
          order: "a",
          value: "EMOM for 7 min: 2-posi hang clean (hips, knee) x 2 @ 65%"
        },
        {
          order: "b1",
          value: "Underhand Barbell Row: 3x8"
        },
        {
          order: "b2",
          value: "Ring Dip: 3x6-10; rest 45 sec"
        },
        {
          order: "c",
          value: "Prowler Shuttle Sprints: 4 sets @ 50-90lbs"
        },
        {
          order: "d",
          value: "Stretch"
        }
      ]
    },
    {
      date: new Date(),
      steps: [
        {
          order: "a",
          value: "EMOM for 7 min: 2-posi hang clean (hips, knee) x 2 @ 65%"
        },
        {
          order: "b1",
          value: "Underhand Barbell Row: 3x8"
        },
        {
          order: "b2",
          value: "Ring Dip: 3x6-10; rest 45 sec"
        },
        {
          order: "c",
          value: "Prowler Shuttle Sprints: 4 sets @ 50-90lbs"
        },
        {
          order: "d",
          value: "Stretch"
        }
      ]
    },
    {
      date: new Date(),
      steps: [
        {
          order: "a",
          value: "EMOM for 7 min: 2-posi hang clean (hips, knee) x 2 @ 65%"
        },
        {
          order: "b1",
          value: "Underhand Barbell Row: 3x8"
        },
        {
          order: "b2",
          value: "Ring Dip: 3x6-10; rest 45 sec"
        },
        {
          order: "c",
          value: "Prowler Shuttle Sprints: 4 sets @ 50-90lbs"
        },
        {
          order: "d",
          value: "Stretch"
        }
      ]
    },
  ]
  res.status(200).json(response)
}
