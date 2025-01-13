export const data = [
    {
      id: 1,
      msg: "What is the problem?",
      upvote: 10,
      downvote: 2,
      timeStamp: "2025-01-13T08:00:00Z",
      replies: [
        {
          id: 2,
          msg: "I think the issue is with the API response.",
          upvote: 8,
          downvote: 1,
          timeStamp: "2025-01-13T08:10:00Z",
          replies: [
            {
              id: 3,
              msg: "Have you checked the request headers?",
              upvote: 4,
              downvote: 0,
              timeStamp: "2025-01-13T08:20:00Z",
              replies: []
            },
            {
              id: 4,
              msg: "Maybe it's a CORS issue?",
              upvote: 5,
              downvote: 2,
              timeStamp: "2025-01-13T08:25:00Z",
              replies: [
                {
                  id: 5,
                  msg: "Yes, CORS could be the culprit. Make sure the backend has the correct headers.",
                  upvote: 3,
                  downvote: 1,
                  timeStamp: "2025-01-13T08:30:00Z",
                  replies: []
                }
              ]
            }
          ]
        },
        {
          id: 6,
          msg: "Can you provide more details about the error?",
          upvote: 6,
          downvote: 0,
          timeStamp: "2025-01-13T08:15:00Z",
          replies: [
            {
              id: 7,
              msg: "The error says '500 Internal Server Error'.",
              upvote: 3,
              downvote: 1,
              timeStamp: "2025-01-13T08:18:00Z",
              replies: [
                {
                  id: 8,
                  msg: "Check the server logs. It might be a database connection issue.",
                  upvote: 4,
                  downvote: 0,
                  timeStamp: "2025-01-13T08:22:00Z",
                  replies: []
                },
                {
                  id: 9,
                  msg: "Sometimes this happens if the backend code throws an unhandled exception.",
                  upvote: 2,
                  downvote: 0,
                  timeStamp: "2025-01-13T08:24:00Z",
                  replies: [
                    {
                      id: 10,
                      msg: "Good point! I'll check for any unhandled exceptions.",
                      upvote: 1,
                      downvote: 0,
                      timeStamp: "2025-01-13T08:28:00Z",
                      replies: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 11,
      msg: "Any update on the frontend styling issues?",
      upvote: 7,
      downvote: 0,
      timeStamp: "2025-01-13T08:05:00Z",
      replies: [
        {
          id: 12,
          msg: "Yes, the issue was with TailwindCSS configuration.",
          upvote: 4,
          downvote: 0,
          timeStamp: "2025-01-13T08:12:00Z",
          replies: [
            {
              id: 13,
              msg: "Did you use the correct version of Tailwind?",
              upvote: 3,
              downvote: 1,
              timeStamp: "2025-01-13T08:16:00Z",
              replies: []
            }
          ]
        },
        {
          id: 14,
          msg: "Is it possible that the class names are being purged in production?",
          upvote: 5,
          downvote: 0,
          timeStamp: "2025-01-13T08:18:00Z",
          replies: [
            {
              id: 15,
              msg: "Yes! Enabling 'content' in the config file fixed it.",
              upvote: 6,
              downvote: 0,
              timeStamp: "2025-01-13T08:20:00Z",
              replies: []
            }
          ]
        }
      ]
    }
  ];

  
export type dataProp={
    id:number,
    upvote:number,
    downvote:number,
    timeStamp:string,
    msg:string,
    replies:dataProp[]
}