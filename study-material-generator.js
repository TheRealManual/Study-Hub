const fs = require('fs').promises;
const path = require('path');

class StudyMaterialGenerator {
    constructor(basePath = './classes') {
        this.basePath = basePath;
    }

    async createClass(className, classTitle) {
        const classPath = path.join(this.basePath, className);
        try {
            await fs.mkdir(classPath, { recursive: true });
            console.log(`✅ Created class directory: ${classPath}`);
            return classPath;
        } catch (error) {
            console.error(`❌ Error creating class directory: ${error.message}`);
            throw error;
        }
    }

    async createTopic(className, topicName, topicData) {
        const topicPath = path.join(this.basePath, className, topicName);
        const studyMaterialPath = path.join(topicPath, 'study-material.json');

        try {
            await fs.mkdir(topicPath, { recursive: true });
            
            const defaultData = {
                title: topicData.title || topicName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                class: topicData.class || className.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                type: topicData.type || "concept",
                description: topicData.description || `Study materials for ${topicName}`,
                notes: topicData.notes || [],
                flashcards: topicData.flashcards || [],
                quiz: topicData.quiz || [],
                games: topicData.games || [],
                resources: topicData.resources || []
            };

            await fs.writeFile(studyMaterialPath, JSON.stringify(defaultData, null, 2));
            console.log(`✅ Created topic: ${topicPath}`);
            return topicPath;
        } catch (error) {
            console.error(`❌ Error creating topic: ${error.message}`);
            throw error;
        }
    }

    async addFlashcard(className, topicName, front, back) {
        const studyMaterialPath = path.join(this.basePath, className, topicName, 'study-material.json');
        
        try {
            const data = JSON.parse(await fs.readFile(studyMaterialPath, 'utf8'));
            data.flashcards.push({ front, back });
            await fs.writeFile(studyMaterialPath, JSON.stringify(data, null, 2));
            console.log(`✅ Added flashcard to ${className}/${topicName}`);
        } catch (error) {
            console.error(`❌ Error adding flashcard: ${error.message}`);
            throw error;
        }
    }

    async addQuizQuestion(className, topicName, question, options, correct, explanation) {
        const studyMaterialPath = path.join(this.basePath, className, topicName, 'study-material.json');
        
        try {
            const data = JSON.parse(await fs.readFile(studyMaterialPath, 'utf8'));
            data.quiz.push({ question, options, correct, explanation });
            await fs.writeFile(studyMaterialPath, JSON.stringify(data, null, 2));
            console.log(`✅ Added quiz question to ${className}/${topicName}`);
        } catch (error) {
            console.error(`❌ Error adding quiz question: ${error.message}`);
            throw error;
        }
    }

    async addNote(className, topicName, note) {
        const studyMaterialPath = path.join(this.basePath, className, topicName, 'study-material.json');
        
        try {
            const data = JSON.parse(await fs.readFile(studyMaterialPath, 'utf8'));
            data.notes.push(note);
            await fs.writeFile(studyMaterialPath, JSON.stringify(data, null, 2));
            console.log(`✅ Added note to ${className}/${topicName}`);
        } catch (error) {
            console.error(`❌ Error adding note: ${error.message}`);
            throw error;
        }
    }

    async listClasses() {
        try {
            const items = await fs.readdir(this.basePath);
            const classes = [];
            
            for (const item of items) {
                const itemPath = path.join(this.basePath, item);
                const stat = await fs.stat(itemPath);
                if (stat.isDirectory()) {
                    const topics = await this.listTopics(item);
                    classes.push({ name: item, topics: topics.length });
                }
            }
            
            return classes;
        } catch (error) {
            console.error(`❌ Error listing classes: ${error.message}`);
            return [];
        }
    }

    async listTopics(className) {
        try {
            const classPath = path.join(this.basePath, className);
            const items = await fs.readdir(classPath);
            const topics = [];
            
            for (const item of items) {
                const itemPath = path.join(classPath, item);
                const stat = await fs.stat(itemPath);
                if (stat.isDirectory()) {
                    const studyMaterialPath = path.join(itemPath, 'study-material.json');
                    try {
                        await fs.access(studyMaterialPath);
                        topics.push(item);
                    } catch {
                        // No study material file, skip
                    }
                }
            }
            
            return topics;
        } catch (error) {
            console.error(`❌ Error listing topics: ${error.message}`);
            return [];
        }
    }

    generateTemplate(type = 'basic') {
        const templates = {
            basic: {
                title: "Topic Title",
                class: "Class Name",
                type: "concept",
                description: "Brief description of the topic",
                notes: [
                    "Key point 1",
                    "Key point 2",
                    "Key point 3"
                ],
                flashcards: [
                    {
                        front: "Question or term",
                        back: "Answer or definition"
                    }
                ],
                quiz: [
                    {
                        question: "Quiz question?",
                        options: ["Option A", "Option B", "Option C", "Option D"],
                        correct: 0,
                        explanation: "Explanation of the correct answer"
                    }
                ],
                games: [
                    {
                        type: "sorting",
                        title: "Game Title",
                        description: "Game instructions",
                        items: ["Item 1", "Item 2", "Item 3"],
                        correct_order: ["Item 1", "Item 2", "Item 3"]
                    }
                ],
                resources: [
                    "Textbook Chapter X",
                    "Lecture slides",
                    "Additional reading"
                ]
            },
            exam: {
                title: "Exam Preparation",
                class: "Class Name",
                type: "exam-prep",
                description: "Comprehensive exam preparation materials",
                notes: [
                    "Exam covers topics A, B, and C",
                    "Focus on understanding concepts",
                    "Practice problems are essential"
                ],
                flashcards: [
                    {
                        front: "Important concept to remember",
                        back: "Detailed explanation"
                    }
                ],
                quiz: [
                    {
                        question: "Practice exam question?",
                        options: ["A", "B", "C", "D"],
                        correct: 0,
                        explanation: "Why this answer is correct"
                    }
                ],
                games: [],
                resources: [
                    "Past exams",
                    "Study guide",
                    "Practice problems"
                ]
            }
        };

        return templates[type] || templates.basic;
    }
}

// CLI Usage Examples
if (require.main === module) {
    const generator = new StudyMaterialGenerator();
    
    // Example usage:
    console.log('Study Material Generator');
    console.log('=======================');
    console.log('');
    console.log('Example usage:');
    console.log('');
    console.log('const generator = new StudyMaterialGenerator();');
    console.log('');
    console.log('// Create a new class');
    console.log('await generator.createClass("data-structures", "Data Structures");');
    console.log('');
    console.log('// Create a new topic');
    console.log('await generator.createTopic("data-structures", "linked-lists", {');
    console.log('  title: "Linked Lists",');
    console.log('  description: "Understanding linked list data structure"');
    console.log('});');
    console.log('');
    console.log('// Add study materials');
    console.log('await generator.addNote("data-structures", "linked-lists", "Linked lists are dynamic data structures");');
    console.log('await generator.addFlashcard("data-structures", "linked-lists", "What is a linked list?", "A linear data structure where elements are stored in nodes");');
    console.log('');
    console.log('// Generate template');
    console.log('console.log(JSON.stringify(generator.generateTemplate("basic"), null, 2));');
}

module.exports = StudyMaterialGenerator;