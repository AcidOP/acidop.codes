---
title: 'Regex Cheatsheet 101: Your Ticket to Regex Mastery'
date: '2023-02-20'
tags: ['cheatsheet']
draft: false
summary: Regex, or regular expressions, can be a bit tricky to learn, but once you get the hang of it, you'll be able to match and manipulate strings like a pro. In this cheatsheet, we'll go over some of the most important concepts and expressions in regex. Don't worry, we'll keep it fun and easy to understand!
images: []
layout: PostLayout
canonicalUrl:
authors: ['default']
---

# Regex Cheatsheet 101

Are you tired of trying to make sense of regex? Don't worry, you're not alone! Regex is like a secret language that only a select few seem to understand.

We've got you covered with our `Regex Cheatsheet 101`!

# Anchors

#### They are like brothers in arms, they from the beginning to the end. Use them to match patterns only at the beginning or end of a line, or to specify word boundaries.

<br />

- `^`: Start of string or line. Think of it as a hat for your text. It marks the beginning of a line.
- `\A`: Start of string. A fancier hat that marks the beginning of a string.
- `$`: End of string or line. The opposite of `^`, it marks the end of a line.
- `\Z`: End of string. The fancier cousin of `$` that marks the end of a string.
- `\b`: Word boundary. It's like a little force field around a word that tells you where it begins and ends.
- `\B`: Not word boundary. The opposite of `\b`.
- `\<`: Start of word. Similar to `^` and `\A`, but specifically for words.
- `\>`: End of word. The opposite of `\<`.

# Character Classes

#### Character classes are like a VIP club for regex. They let you specify which characters are allowed in your pattern and which are not. It's like telling regex, "Hey, only these characters get into the party!"

<br />

- `\c`: Control character. A character that controls your text. Watch out, it's in charge!
- `\s`: Whitespace. Spaces, tabs, and other invisible characters that make your text look nice and neat.
- `\S`: Not whitespace. Anything that's not a space, tab, or other invisible character.
- `\d`: Digit. The numbers 0-9.
- `\D`: Not digit. Anything that's not a number.
- `\w`: Word. Letters, numbers, and underscores.
- `\W`: Not word. Anything that's not a letter, number, or underscore.
- `\x`: Hexadecimal digit. A fancy name for numbers and letters (A-F, a-f) that are used in hex code.
- `\O`: Octal digit. Numbers in base 8. Fun fact: octopuses are also good with digits!

# Quantifiers

#### Quantifiers are like the picky eaters of regex, they'll only match a specific number of characters. Use them to specify how many times a pattern should be repeated, or to match a range of characters.

<br />

- `*`: 0 or more. Like a buffet that you can go back to as many times as you want.
- `+`: 1 or more. Like a VIP lounge that only lets in the cool kids who have something to offer.
- `?`: 0 or 1 (optional). Like a checkbox that you can check or leave empty.
- `{3}`: Exactly 3. The perfect number of times to do something.
- `{3,}`: 3 or more. Like a marathon that never seems to end.
- `{2,5}`: 2, 3, 4 or 5. Like a multiple-choice question with several correct answers.

# Special Characters

#### Special characters are like the secret agents of regex. They have hidden powers that can match any character, any digit, any whitespace, or even any non-printable character. Use them to add some spice to your pattern.

<br />

- `\n`: New line. The line break that you use when you want to start a new paragraph.
- `\r`: Carriage return. A fancy name for the Enter key.
- `\t`: Tab. The button that you press when you want to indent your text.
- `\v`: Vertical tab. A rarely used character that you probably won't need to worry about.
- `\f`: Form feed. A character that's mostly used in old printers. Don't worry about it.

# Assertions

#### Assertions are like the truth detectors of regex. They let you test if a pattern exists at a specific position in the string, without actually matching the pattern. Use them to make sure your pattern is where it's supposed to be.

<br />

- `?=`: Lookahead assertion. Like a crystal ball that tells you what's coming up next in your text.
- `?!`: Negative lookahead. The opposite of `?=`. It tells you what's _not_ coming up next in your text.
- `?<=`: Lookbehind assertion. Like a time machine that takes you back to the beginning of a word or phrase.
- `?<!`: Negative lookbehind. The opposite of `?<=`. It tells you what's _not_ behind you in your text.

# Groups and Capture

#### Groups and capture are like the cheerleaders of regex. They help you group parts of your pattern together and capture them for later use. It's like creating a dance routine for your pattern to follow

<br />

- `()`: Group. A way to group parts of your regex together.
- `(?:)`: Non-capturing group. Like a regular group, but it doesn't create a capture group.
- `\n`: Backreference. A way to reference a previous capture group.
- `(?P<name>)`: Named capture group. A way to give a capture group a name.

# Alternation

#### Alternation is like playing matchmaker for your regex. It lets you match one pattern or another, but not both. Use it to give your pattern some options and make sure it's happy.

<br />

- `|`: Alternation. A way to match one thing or another. It's like a fork in the road.
- `[]`: Character set. A way to match one character out of a set of characters.
- `[^]`: Negated character set. The opposite of `[]`. Matches anything _not_ in the set.

# Flags

#### Flags are like the superhero costumes of regex. They change how your pattern matches, like making it case-insensitive, or multi-line. Use them to give your pattern some extra powers and help it save the day.

<br />

- `i`: Case-insensitive. Matches both upper and lowercase letters.
- `m`: Multiline. Allows `^` and `$` to match the beginning and end of lines.
- `s`: Dot-all. Allows `.` to match newline characters.
- `x`: Verbose. Allows you to write your regex in multiple lines and add comments.

<br />

# Family Friendly Examples

- Match the first word of a sentence:

  `^\w+`

- Match the whole text except for the last line:

  `^.*\n.*\n.*$`

- Find all the words that contain the letter "z":

  `\b\w*z\w*\b`

- Find all the words that do not contain the letter "e":

  `\b[^e\s]+\b`

- Match any line that starts with a digit:

  `^\d.*$`

- Match any line that ends with a punctuation mark:

  `^.*\p{P}$`

- Find all the phone numbers in a text:

  `(\d{3})-(\d{3})-(\d{4})`

- Find all the email addresses in a text:

  `\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b`

- Match any line that starts with the word "Lorem":

  `^\bLorem\b.*$`

- Match any line that ends with a three-digit number:

  `^.*\b\d{3}$`

- Match any line that contains the word "regex" and the word "cheat":

  `^(?=.*regex)(?=.*cheat).*$`

- Match any line that does not contain the word "Python":

  `^(?!.*Python).*$`

- Match any line that starts and ends with the same word:

  `^\b(\w+)\b.*\b\1\b$`

- Match any line that has more than 10 characters:

  `^.{11,}$`

- Match any line that has exactly 3 digits:

  `^.*\b\d{3}\b.*$`

- Match any line that has a word with 2 or more consecutive vowels:

  `^.*\b[aeiou]{2}\w*\b.*$`

- Match any line that has a word with at least 3 consonants in a row:

  `^.*\b[^aeiou]{3}\w*\b.*$`

- Match any line that has a word that starts with "c" and ends with "t":

  `^.*\bc\w*t\b.*$`
