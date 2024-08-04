# Creating Your Own Visual Novel: JSON Guide

This guide will walk you through the process of creating your own visual novel using our JSON-based game engine. By following this guide, you'll be able to craft your own stories, characters, and scenes.

## JSON Structure Overview

The game data is stored in a JSON file with the following high-level structure:

```json
{
  "scenes": [
    {
      "background": "image_filename.jpg",
      "characters": [
        {"name": "Character1", "emoji": "🧝"},
        {"name": "Character2", "emoji": "🧙"}
      ],
      "dialog": [
        {
          "speaker": "Character1",
          "characterIndex": 0,
          "text": "Hello, this is my dialog."
        },
        // More dialog entries...
      ]
    },
    // More scenes...
  ]
}
```

## Creating Your Story

### 1. Plan Your Story

Before you start writing JSON, plan out your story:
- Outline the main plot points
- Create your characters
- Decide on the backgrounds/settings for each scene

### 2. Prepare Your Assets

- Choose or create background images for each scene
- Select emojis to represent your characters

### 3. Write Your JSON

#### Scenes

Each scene in your visual novel is represented by an object in the `scenes` array. A scene typically represents a single location or a continuous piece of dialog.

```json
{
  "background": "forest.jpg",
  "characters": [
    {"name": "Elf", "emoji": "🧝"},
    {"name": "Wizard", "emoji": "🧙"}
  ],
  "dialog": [
    // Dialog entries go here
  ]
}
```

- `background`: The filename of the background image for this scene
- `characters`: An array of character objects present in the scene

#### Characters

Characters are defined within each scene. This allows you to have different characters present in different scenes.

```json
{"name": "Elf", "emoji": "🧝"}
```

- `name`: The character's name (used in the dialog box)
- `emoji`: The emoji used to represent the character visually

#### Dialog

The `dialog` array contains the conversation that happens in the scene. Each entry represents a single piece of dialog.

```json
{
  "speaker": "Elf",
  "characterIndex": 0,
  "text": "Greetings, wise one. What brings you to these ancient woods?"
}
```

- `speaker`: The name of the character speaking (should match a character name)
- `characterIndex`: The index of the speaking character in the `characters` array (0-based)
- `text`: The actual dialog text

### 4. Putting It All Together

Here's an example of a complete scene:

```json
{
  "scenes": [
    {
      "background": "forest.jpg",
      "characters": [
        {"name": "Elf", "emoji": "🧝"},
        {"name": "Wizard", "emoji": "🧙"}
      ],
      "dialog": [
        {
          "speaker": "Narrator",
          "characterIndex": -1,
          "text": "Deep in the enchanted forest, an Elf and a Wizard cross paths..."
        },
        {
          "speaker": "Elf",
          "characterIndex": 0,
          "text": "Greetings, wise one. What brings you to these ancient woods?"
        },
        {
          "speaker": "Wizard",
          "characterIndex": 1,
          "text": "Ah, fair Elf! I seek the Crystal of Eternity. Legend speaks of its presence in this very forest."
        }
      ]
    }
  ]
}
```

## Tips for Creating Engaging Visual Novels

1. **Varied Backgrounds**: Use different backgrounds to create a sense of place and progression.
2. **Character Development**: Show character growth through dialog and interactions.
3. **Pacing**: Mix longer and shorter dialog entries to control the pacing of your story.
4. **Descriptive Text**: Use the narrator to set the scene and describe actions that can't be shown through dialog alone.
5. **Emoji Selection**: Choose emojis that best represent your characters' personalities and appearances.

## Testing Your Visual Novel

1. Save your JSON file as `game_data.json` in your project directory.
2. Open the `index.html` file in a web browser.
3. Play through your visual novel, checking for any errors or inconsistencies.
4. Iterate and refine your story as needed.

Remember, the beauty of this system is its flexibility. You can easily add new scenes, characters, and dialog to expand your story. Happy writing!