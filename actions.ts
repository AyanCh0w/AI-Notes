"use server"
import { openai } from "./openai"

export async function audioTranscribe(selectedFile: File) {
  const formData = new FormData()
  formData.append("file", selectedFile)
  formData.append("model", "whisper-1")

  const headers = new Headers()
  headers.append("Authorization", "Bearer " + process.env.OPENAI_API_KEY)

  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    body: formData,
    headers: headers,
  })
    .then((res) => res.json())
    .then((res) => res.text)

  return res
}

export async function gptAnalysis(transcription: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: transcription },
      {
        role: "user",
        content: `
          generate info in json in this format in chronological order from this transcript.
          For summary, summarize the section throughly in the style of notes.
          this is an example of the format, extract data in that format and use these types as needed. There should be some explanations
          it all has to be in the root list
          do not make up new types, only use the ones listed
          have the data stored and returned in on big list
          try to output as much as possible

          [
            { "type": "summary", "content": "This is a summary" },
            {"type": "explanation", "content":"extra detailed explanation on specific part"},
            { "type": "equation", "content": "y = mx+b" },
            { "type": "summary", "content": "This is a summary" },
            {
              "type": "question",
              "question": "how do i do this?",
              "answer": "this is an answer"
            },
            { "type": "summary", "content": "This is a summary" }
          ]
          `,
      },
    ],
    model: "gpt-3.5-turbo",
  })
  return completion.choices[0].message.content
}
