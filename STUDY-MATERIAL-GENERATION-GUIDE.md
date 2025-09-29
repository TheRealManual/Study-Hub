# STUDY-MATERIAL.JSON GENERATION GUIDE

## Overview
This guide provides detailed instructions for creating comprehensive study-material.json files for the Study Hub system. The JSON structure contains 6 main sections designed to support multiple learning modalities.

## JSON Structure Components

### 1. TITLE
- **Purpose**: Clear, descriptive topic/chapter name
- **Format**: String
- **Example**: "Algorithm Analysis and Big-O Notation"

### 2. NOTES SECTION
- **Purpose**: Key study points with source references
- **Format**: Array of arrays `[content, page_number, source_file]`
- **Requirements**:
  - **content**: Concise, factual statement (1-2 sentences max)
  - **page_number**: Integer or 0 if no specific page
  - **source_file**: Filename or "No Source" if general knowledge
  - **Quantity**: Aim for 15-25 notes covering all key concepts
  - **Focus**: Definitions, formulas, key facts, and important relationships

**Example**:
```json
[
  "Big-O notation provides an asymptotic upper bound for algorithm complexity.",
  5,
  "Algorithm_Analysis.pdf"
]
```

### 3. FLASHCARDS SECTION
- **Purpose**: Question-answer pairs for memorization and quick review
- **Format**: Array of objects with `front` and `back` properties
- **Requirements**:
  - **front**: Clear, concise question or prompt
  - **back**: Direct answer with key details
  - **Quantity**: Create 15-30 flashcards covering essential concepts
  - **Variety**: Mix question types (definitions, examples, comparisons, applications)
  - **Quality**: Keep answers focused but complete enough to be useful

**Example**:
```json
{
  "front": "What is Big-O notation?",
  "back": "Mathematical notation describing the upper bound of an algorithm's time or space complexity as input size approaches infinity."
}
```

### 4. QUIZ SECTION
- **Purpose**: Multiple-choice questions to test understanding
- **Format**: Array of objects with `question`, `options`, `answer`, `explanation`
- **Requirements**:
  - **question**: Clear, specific question testing understanding
  - **options**: Array of 3-4 plausible choices
  - **answer**: Zero-based index of correct option (0, 1, 2, or 3)
  - **explanation**: Brief explanation of why the answer is correct
  - **Quantity**: Create 10-20 questions covering different difficulty levels
  - **Focus**: Test conceptual understanding, not just memorization
  - **Include**: Application and analysis questions

**Example**:
```json
{
  "question": "Which sorting algorithm has the best worst-case time complexity?",
  "options": [
    "Quick Sort",
    "Merge Sort", 
    "Bubble Sort",
    "Selection Sort"
  ],
  "answer": 1,
  "explanation": "Merge Sort maintains O(n log n) in worst case, while Quick Sort degrades to O(n²)."
}
```

### 5. GAMES SECTION
- **Purpose**: Built-in interactive learning activities
- **Format**: Empty array `[]`
- **Note**: Games are automatically generated from flashcards:
  - **Lightning Round**: Quick-fire Q&A using flashcard content
  - **Memory Match**: Matching game pairing flashcard fronts with backs
- **No custom games needed**: The system uses existing flashcards to create engaging games

**Template**:
```json
"games": []
```

### 6. SOURCES SECTION
- **Purpose**: List all reference materials used
- **Format**: Array of strings
- **Requirements**: 
  - Include textbooks, PDFs, lecture notes, etc.
  - Use exact filenames as they appear in the study materials

---

## CHATGPT GENERATION PROMPT

Use this exact prompt with ChatGPT to generate study materials:

```
Create a comprehensive study-material.json file for the topic '[INSERT_TOPIC_HERE]' based on the provided source materials. Follow these exact specifications:

**STRUCTURE REQUIREMENTS:**
1. Use the exact JSON structure provided in the template
2. Ensure valid JSON syntax (no trailing commas, proper escaping)
3. Do not include any comments in the final JSON

**CONTENT REQUIREMENTS:**

**TITLE:** Create a clear, descriptive title for the topic

**NOTES (15-25 items):**
- Format: [content_string, page_number, source_filename]
- Content: 1-2 sentence factual statements
- Cover all major concepts, definitions, formulas, and key relationships
- Use actual page numbers from source materials or 0 if unknown
- Use actual filenames or 'No Source' for general knowledge

**FLASHCARDS (15-30 items):**
- Format: {front: question, back: answer}
- Mix question types: definitions, examples, comparisons, applications
- Front: Clear, concise questions
- Back: Complete but focused answers
- Test essential concepts students must memorize

**QUIZ (10-20 items):**
- Format: {question, options (array), answer (index), explanation}
- 3-4 plausible options per question
- Answer: 0-based index (0, 1, 2, or 3)
- Test understanding, not just memorization
- Include various difficulty levels
- Explanations should clarify why the answer is correct

**GAMES:**
- Set as empty array: "games": []
- Built-in games (Lightning Round and Memory Match) are automatically generated from flashcards
- No custom games needed

**SOURCES:**
- List all reference materials used
- Use exact filenames from the provided materials

**QUALITY STANDARDS:**
- Ensure accuracy and completeness
- Use clear, educational language
- Test understanding at multiple levels
- Create engaging, varied content
- Maintain consistency in terminology

Generate the complete JSON file following these specifications exactly.
```

## USAGE INSTRUCTIONS

1. **Prepare Materials**: Gather all source materials (PDFs, notes, textbooks, etc.)

2. **Customize Prompt**: Replace `[INSERT_TOPIC_HERE]` with your specific topic/chapter name

3. **Provide Context**: Give ChatGPT the source materials and the customized prompt

4. **Review Output**: Check the generated content for:
   - JSON syntax validity
   - Content accuracy
   - Completeness of coverage
   - Question clarity

5. **Validate**: Test the JSON in the Study Hub system to ensure proper functionality

6. **Iterate**: Refine content as needed based on student feedback and learning outcomes

## QUALITY CHECKLIST

- [ ] Valid JSON syntax (no trailing commas, proper escaping)
- [ ] 15-25 comprehensive notes covering all key concepts
- [ ] 15-30 varied flashcards testing essential knowledge
- [ ] 10-20 quiz questions with clear, correct answers
- [ ] Games section set to empty array (built-in games auto-generated)
- [ ] Complete source attribution
- [ ] Consistent terminology throughout
- [ ] Appropriate difficulty progression
- [ ] Clear, educational language

## COMMON MISTAKES TO AVOID

1. **JSON Syntax Errors**: Always validate JSON before deployment
2. **Incomplete Coverage**: Ensure all major topics are addressed
3. **Poor Question Quality**: Avoid ambiguous or trick questions
4. **Missing Explanations**: Every quiz answer should have a clear explanation
5. **Inconsistent Terminology**: Use the same terms throughout all sections
6. **Overly Complex Language**: Keep explanations clear and student-friendly
7. **Inadequate Source Attribution**: Always cite specific sources when possible

---

*This guide ensures consistent, high-quality study materials that effectively support student learning across multiple modalities in the Study Hub system.*