#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createNewTopic() {
  console.log('🎓 Study Hub - New Topic Creator');
  console.log('=====================================\n');

  try {
    // Get class name
    const className = await question('Enter class name (e.g., "data-structures"): ');
    if (!className.trim()) {
      console.log('❌ Class name is required');
      process.exit(1);
    }

    // Get topic name
    const topicName = await question('Enter topic name (e.g., "binary-trees"): ');
    if (!topicName.trim()) {
      console.log('❌ Topic name is required');
      process.exit(1);
    }

    // Get topic title (display name)
    const topicTitle = await question('Enter topic display title (e.g., "Binary Trees"): ');
    
    // Get topic description
    const description = await question('Enter a brief description: ');

    // Create directory structure
    const topicPath = path.join('classes', className.trim(), topicName.trim());
    await fs.mkdir(topicPath, { recursive: true });

    // Create study material JSON
    const studyMaterial = {
      title: topicTitle.trim() || topicName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      class: className.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      type: "concept",
      description: description.trim() || `Study materials for ${topicName}`,
      notes: [
        "Add your first key point here",
        "Add your second key point here", 
        "Add more notes as needed"
      ],
      flashcards: [
        {
          front: "Sample question about this topic",
          back: "Sample answer - replace with your content"
        }
      ],
      quiz: [
        {
          question: "Sample quiz question?",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation of the correct answer"
        }
      ],
      games: [],
      resources: [
        "Add your textbook references here",
        "Add lecture slides references here"
      ]
    };

    const filePath = path.join(topicPath, 'study-material.json');
    await fs.writeFile(filePath, JSON.stringify(studyMaterial, null, 2));

    console.log('\n✅ Topic created successfully!');
    console.log(`📁 Path: ${topicPath}`);
    console.log(`📄 File: ${filePath}`);
    console.log('\n📝 Next steps:');
    console.log('1. Edit the study-material.json file to add your content');
    console.log('2. Refresh your Study Hub website to see the new topic');
    console.log('3. Use the template-study-material.json file as a reference');

  } catch (error) {
    console.error('❌ Error creating topic:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

async function listExistingContent() {
  console.log('\n📚 Existing Content:');
  console.log('====================');
  
  try {
    const classesPath = 'classes';
    const classes = await fs.readdir(classesPath);
    
    for (const className of classes) {
      const classPath = path.join(classesPath, className);
      const stat = await fs.stat(classPath);
      
      if (stat.isDirectory()) {
        console.log(`\n📖 ${className}:`);
        
        const topics = await fs.readdir(classPath);
        for (const topicName of topics) {
          const topicPath = path.join(classPath, topicName);
          const topicStat = await fs.stat(topicPath);
          
          if (topicStat.isDirectory()) {
            const studyMaterialPath = path.join(topicPath, 'study-material.json');
            try {
              await fs.access(studyMaterialPath);
              console.log(`  ✅ ${topicName}`);
            } catch {
              console.log(`  ❌ ${topicName} (no study-material.json)`);
            }
          }
        }
      }
    }
  } catch (error) {
    console.log('No existing content found or error reading classes directory');
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--list') || args.includes('-l')) {
    await listExistingContent();
    return;
  }

  if (args.includes('--help') || args.includes('-h')) {
    console.log('Study Hub Topic Creator');
    console.log('Usage:');
    console.log('  node create-topic.js        Create a new topic interactively');
    console.log('  node create-topic.js --list List existing content');
    console.log('  node create-topic.js --help Show this help');
    return;
  }

  await createNewTopic();
}

main().catch(console.error);