function getMeaning() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();
  const responseDiv = document.getElementById('response');

  if (!name) {
    responseDiv.innerHTML = "<em>Please enter a name above!</em>";
    return;
  }

  // Extensive name meanings collection
  const nameMeanings = {
    "Alex": "Defender of the people. Bold and courageous!",
    "Sophia": "Wisdom and elegance embody you.",
    "John": "Graceful and merciful.",
    "Emma": "Whole or universal.",
    "Michael": "Who is like God? A strong leader.",
    "Emily": "Eager and admired.",
    "David": "Beloved; friend.",
    "Sarah": "Princess; noblewoman.",
    "James": "Supplanter, one who follows.",
    "Maria": "Bitter, or beloved.",
    "William": "Resolute protector.",
    "Olivia": "Olive tree symbol of peace.",
    "Benjamin": "Son of the right hand.",
    "Ava": "Bird or life.",
    "Ethan": "Strong, firm, enduring.",
    "Isabella": "Devoted to God.",
    "Mia": "Mine or wished-for child.",
    "Noah": "Rest, comfort.",
    "Liam": "Strong-willed warrior.",
    "Charlotte": "Free man, petite."
  };

  // Normalize the name: first letter uppercase, rest lowercase
  const key = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  let meaning = nameMeanings[key];

  if (!meaning) {
    // If name not recognized, give a playful default message
    meaning = "Hmm, I'm not sure about that name! But it sounds wonderful!";
  } else {
    // Add some playful compliments
    const compliments = [
      "You're truly special!",
      "That name suits you perfectly!",
      "A great choice!",
      "You have a majestic name!",
      "That's an awesome name!"
    ];
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    meaning += ' ' + compliment;
  }

  // Display the result
  responseDiv.innerHTML = `<strong>${name}</strong>: ${meaning}`;
}