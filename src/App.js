import React, { useState } from 'react';
import { BookOpen, Send, Loader2, LogOut, Save, StickyNote, Trash2, Calendar, Home, Atom, Calculator, PenTool, Languages, Upload, FileText, BarChart3, Search, Brain, Download, Camera, CheckCircle, XCircle } from 'lucide-react';

const mockResponses = {
  history: {
    default: "In studying this historical period, we can observe several key factors that shaped the events. The social, economic, and political conditions of the time created a unique environment that led to significant changes. Primary sources from this era reveal the perspectives of people who lived through these events, while modern historians continue to debate the long-term implications. Understanding this period requires examining both the immediate causes and the broader historical context that made these developments possible.",
    'Ancient History': "Ancient civilizations developed complex societies with sophisticated systems of government, agriculture, and culture. Archaeological evidence shows that early humans created impressive architectural achievements, developed writing systems, and established trade networks across vast distances. The pyramids of Egypt, for example, demonstrate advanced engineering knowledge and organizational capabilities. These ancient peoples laid the foundation for many aspects of modern society, including legal systems, mathematical concepts, and artistic traditions.",
    'Medieval History': "The Medieval period, spanning roughly from the 5th to 15th centuries, was characterized by feudalism, the power of the Catholic Church, and significant cultural developments. The feudal system created a hierarchical social structure where lords granted land to vassals in exchange for military service. Knights followed codes of chivalry, while castles served as centers of power and defense. The Crusades had lasting impacts on trade, cultural exchange, and religious tensions between Christianity and Islam.",
    'World Wars': "The World Wars of the 20th century represented unprecedented global conflicts that reshaped international relations and political boundaries. World War I (1914-1918) was triggered by a complex web of alliances, nationalism, and imperialism, with the assassination of Archduke Franz Ferdinand serving as the immediate catalyst. World War II (1939-1945) arose from the Treaty of Versailles' harsh terms, economic depression, and the rise of fascism. These wars introduced new military technologies, caused massive casualties, and led to significant social changes.",
    'American History': "American history encompasses the indigenous peoples' rich traditions, European colonization, the struggle for independence, expansion westward, civil war, industrialization, and emergence as a global superpower. The American Revolution (1775-1783) established democratic principles that influenced worldwide movements. The Civil Rights Movement of the 1950s-60s challenged racial segregation and discrimination, leading to landmark legislation and ongoing social change.",
    'European History': "European history has been shaped by major movements including the Renaissance, Reformation, Enlightenment, and Industrial Revolution. The Protestant Reformation in the 16th century challenged Catholic Church authority and led to religious wars and political reorganization. The Renaissance brought a renewed interest in classical learning, art, and humanism. These developments fundamentally transformed European society and had global impacts through colonization and trade."
  },
  science: {
    default: "This scientific concept involves complex interactions at the molecular or atomic level. The process is governed by fundamental laws of physics and chemistry that scientists have carefully studied through experimentation and observation. Modern research continues to reveal new insights into this phenomenon, with applications ranging from medicine to technology. Understanding this concept requires knowledge of related scientific principles and their practical applications in our daily lives.",
    'Physics': "Physical phenomena are governed by fundamental laws that describe how matter and energy interact in our universe. Newton's laws of motion explain how forces cause objects to accelerate, while Einstein's theory of relativity revolutionized our understanding of space and time. Energy transforms from one form to another but is never created or destroyed, following the law of conservation of energy. At quantum scales, particles behave in ways that challenge our everyday intuitions, exhibiting both wave and particle properties.",
    'Chemistry': "Chemistry studies the composition, structure, properties, and changes of matter. The periodic table organizes elements by their atomic structure and chemical properties, revealing patterns that help predict how substances will react. Chemical bonds form when atoms share or transfer electrons, creating molecules with unique properties. Different types of reactions include synthesis, decomposition, combustion, and acid-base neutralization. Understanding chemical principles is essential for developing new materials, medicines, and technologies.",
    'Biology': "Biological systems are incredibly complex, with cells serving as the fundamental units of life. DNA contains genetic instructions encoded in sequences of nucleotides, while RNA helps translate this information into proteins that perform cellular functions. Photosynthesis converts light energy into chemical energy, supporting most life on Earth. Evolution through natural selection has shaped the diversity of life over billions of years, with organisms continuously adapting to their environments through genetic variation and differential reproduction.",
    'Astronomy': "Astronomy explores celestial objects and phenomena throughout the universe. Stars form from collapsing clouds of gas and dust, fusing hydrogen into helium through nuclear reactions. Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape. Galaxies contain billions of stars held together by gravity, and our universe continues to expand as evidenced by redshift observations. The Big Bang theory explains how the universe began approximately 13.8 billion years ago.",
    'Earth Science': "Earth Science encompasses geology, meteorology, oceanography, and environmental science. Earthquakes occur when tectonic plates suddenly release built-up stress along faults, sending seismic waves through the Earth. Volcanoes form where magma reaches the surface, often at plate boundaries or hotspots. The rock cycle describes how rocks transform between igneous, sedimentary, and metamorphic forms through geological processes. Weather patterns are driven by solar heating, atmospheric pressure differences, and Earth's rotation.",
    'Environmental Science': "Environmental Science studies interactions between physical, chemical, and biological components of the environment. Climate change results from increased greenhouse gas concentrations trapping heat in the atmosphere, leading to rising temperatures and altered weather patterns. Biodiversity provides ecosystem services essential for human survival, including pollination, water purification, and climate regulation. Sustainable practices balance human needs with environmental preservation, addressing challenges like deforestation, pollution, and resource depletion."
  },
  math: {
    default: "This mathematical concept involves logical reasoning and abstract thinking. The solution requires understanding the underlying principles and applying appropriate techniques systematically. Mathematics provides tools for solving real-world problems by representing relationships with symbols and equations. Practice with similar problems helps develop problem-solving skills and mathematical intuition, which are valuable in many fields.",
    'Algebra': "Algebra uses variables to represent unknown quantities and establish relationships between them. To solve equations, we isolate the variable by performing the same operations on both sides, maintaining equality. The quadratic formula x = (-b ± √(b²-4ac))/2a solves any quadratic equation ax² + bx + c = 0. Factoring breaks down complex expressions into simpler components: x² + 5x + 6 = (x + 2)(x + 3). Linear equations form straight lines when graphed, while quadratic equations create parabolas.",
    'Geometry': "Geometry studies shapes, sizes, and spatial relationships. The Pythagorean theorem (a² + b² = c²) relates the sides of right triangles and has countless applications in construction, navigation, and physics. The area of a circle is πr², where r is the radius, while circumference is 2πr. Angles are measured in degrees or radians, with complementary angles summing to 90° and supplementary angles to 180°. Similar triangles have proportional sides, allowing us to calculate unknown distances.",
    'Calculus': "Calculus deals with continuous change through two main operations: differentiation and integration. Derivatives measure instantaneous rates of change, found using the power rule d/dx(xⁿ) = nxⁿ⁻¹ and chain rule for composite functions. Integration is the reverse process, finding areas under curves and accumulated quantities. The fundamental theorem of calculus connects these operations: ∫f'(x)dx = f(x) + C. Applications include optimization, motion analysis, and modeling natural phenomena.",
    'Statistics': "Statistics involves collecting, analyzing, and interpreting data. Measures of central tendency include mean (average), median (middle value), and mode (most frequent). Standard deviation quantifies data spread around the mean, with larger values indicating more variability. The normal distribution, or bell curve, describes many natural phenomena. Probability expresses likelihood as values between 0 and 1, with independent events' probabilities multiplying: P(A and B) = P(A) × P(B).",
    'Trigonometry': "Trigonometry studies relationships between angles and sides in triangles. The unit circle defines sine, cosine, and tangent for all angles: sin(θ) = opposite/hypotenuse, cos(θ) = adjacent/hypotenuse, tan(θ) = opposite/adjacent. Key identities include sin²(θ) + cos²(θ) = 1 and tan(θ) = sin(θ)/cos(θ). The law of sines and cosines extend these relationships to non-right triangles, enabling solutions in navigation, engineering, and physics.",
    'Discrete Math': "Discrete mathematics deals with countable, distinct objects rather than continuous quantities. Set theory provides a foundation for mathematics, defining operations like union, intersection, and complement. Logic uses truth tables and Boolean algebra to analyze statements and arguments. Permutations count ordered arrangements (n!), while combinations count unordered selections (n!/(k!(n-k)!)). Graph theory studies networks of connected points, with applications in computer science, social networks, and optimization."
  },
  english: {
    default: "Effective communication in English requires understanding both grammar rules and stylistic choices. Clear writing uses precise vocabulary, varied sentence structures, and logical organization of ideas. Literary analysis involves examining how authors use language, symbolism, and narrative techniques to convey meaning. Reading comprehension improves through active engagement with texts, considering context, identifying main ideas, and making inferences beyond literal content.",
    'Grammar': "Grammar provides the structural rules that make communication clear and effective. Proper punctuation guides readers: periods end statements, commas separate clauses and items, and semicolons connect related independent clauses. Subject-verb agreement ensures singular subjects take singular verbs and plural subjects take plural verbs. Parts of speech each serve specific functions: nouns name things, verbs show action or state, adjectives modify nouns, and adverbs modify verbs, adjectives, or other adverbs. Understanding these rules helps writers express ideas precisely.",
    'Literature': "Literary analysis examines how authors create meaning through various techniques. Symbolism uses concrete objects to represent abstract ideas, like a dove symbolizing peace. Character development shows how protagonists change throughout the story, often learning important lessons. Themes are central ideas explored throughout a work, such as love, power, or identity. Tone reflects the author's attitude toward the subject, while mood describes the emotional atmosphere. Setting establishes time and place, influencing plot and character development.",
    'Writing': "Effective writing begins with strong opening paragraphs that hook readers and introduce the topic. Descriptive writing uses sensory details—what you see, hear, smell, taste, and feel—to create vivid images. Developing your writing style involves finding your unique voice through word choice, sentence structure, and rhythm. The writing process includes prewriting, drafting, revising, editing, and publishing. Revision focuses on content and organization, while editing addresses grammar, spelling, and punctuation.",
    'Poetry': "Poetry uses condensed language and literary devices to create emotional and aesthetic effects. Meter refers to the rhythmic pattern of stressed and unstressed syllables, as in iambic pentameter (da-DUM da-DUM da-DUM da-DUM da-DUM). Rhyme schemes describe patterns of rhyming lines, indicated by letters (ABAB, AABB). Imagery creates mental pictures through descriptive language. Metaphors directly compare unlike things ('time is a thief'), while similes use 'like' or 'as' ('brave as a lion').",
    'Essay Writing': "A strong thesis statement presents the main argument in one or two sentences, appearing at the end of the introduction. The five-paragraph essay includes an introduction, three body paragraphs, and a conclusion. Each body paragraph should start with a topic sentence stating its main point, followed by evidence and analysis. Persuasive essays use logical arguments, credible evidence, and emotional appeals to convince readers. Effective conclusions synthesize main points without simply repeating the introduction, often ending with broader implications.",
    'Reading Comprehension': "Reading comprehension involves actively engaging with text to extract meaning. Identifying main ideas requires distinguishing central points from supporting details, often found in topic sentences. Making inferences means reading between the lines to understand implied meanings based on context clues and prior knowledge. Context clues help determine unfamiliar word meanings through surrounding text. Understanding author's purpose—whether to inform, persuade, entertain, or explain—helps readers critically evaluate content."
  },
  french: {
    default: "La langue française utilise des structures grammaticales spécifiques et un système de conjugaison complexe. (French uses specific grammatical structures and a complex conjugation system.) Understanding verb conjugations, noun genders, and agreement rules is essential for mastering French. Practice with native speakers and immersion in French media helps develop fluency and cultural understanding. French is spoken by millions worldwide and opens doors to rich literary and cultural traditions.",
    'Grammar': "French grammar includes several key features. Nouns have gender (masculine/feminine): le livre (book, masculine), la table (table, feminine). Articles agree with nouns: le/la (the), un/une (a/an), les (the, plural). Adjectives must match noun gender and number: le grand livre (the big book), la grande table (the big table). The partitive article (du, de la, des) expresses 'some': Je veux du pain (I want some bread). Negation uses ne...pas around the verb: Je ne parle pas (I don't speak).",
    'Vocabulary': "Essential French vocabulary includes greetings: Bonjour (hello), Bonsoir (good evening), Au revoir (goodbye). Days of the week: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. Food terms: le pain (bread), le fromage (cheese), le vin (wine). Numbers: un, deux, trois, quatre, cinq (1-5). Common phrases: Comment allez-vous? (How are you?), Je m'appelle... (My name is...), Parlez-vous anglais? (Do you speak English?). Building vocabulary through context and regular practice is essential.",
    'Conversation': "Basic French conversations follow polite patterns. Introducing yourself: 'Bonjour, je m'appelle Marie. Enchanté(e).' (Hello, my name is Marie. Nice to meet you.) At restaurants: 'Je voudrais le menu, s'il vous plaît' (I would like the menu, please). Asking for help: 'Pouvez-vous m'aider?' (Can you help me?). Making small talk: 'Il fait beau aujourd'hui' (The weather is nice today). Always use 'vous' (formal you) with strangers and 'tu' (informal you) with friends.",
    'Pronunciation': "French pronunciation has specific rules. Vowels are pure sounds: 'a' like 'ah', 'e' can be various sounds (é, è, ê), 'i' like 'ee', 'o' like 'oh', 'u' like 'ew'. The French 'r' is a throaty sound from the back of the throat. Liaison connects words: 'les amis' sounds like 'lay-zah-mee'. Many final consonants are silent: 'Paris' sounds like 'Pah-ree'. Accents change pronunciation: é (ay), è/ê (eh), ç (s sound).",
    'Verb Conjugation': "French verb conjugation varies by tense and person. Present tense for regular -er verbs (parler - to speak): je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent. Être (to be): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. Avoir (to have): j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Passé composé combines auxiliary verb with past participle: j'ai parlé (I spoke/have spoken).",
    'French Culture': "French culture values gastronomy, art, and intellectual discourse. Meals are important social occasions, typically lasting hours with multiple courses. The French greet with 'la bise' (cheek kisses), usually two but varies by region. Café culture is central to social life; people spend hours at cafes conversing. French holidays include Bastille Day (July 14), celebrating the French Revolution. Wine and cheese are integral to French cuisine, with distinct regional varieties throughout the country."
  },
  spanish: {
    default: "El español es una lengua romance con estructuras gramaticales específicas y rica variedad cultural. (Spanish is a Romance language with specific grammatical structures and rich cultural variety.) Learning Spanish involves mastering verb conjugations, understanding gender agreement, and developing listening comprehension skills. Regular practice and exposure to Spanish media accelerates language acquisition. Spanish is the world's second-most spoken native language.",
    'Grammar': "Spanish grammar has key features. Nouns have gender: el libro (book, masculine), la mesa (table, feminine). Articles match nouns: el/la (the), un/una (a/an), los/las (the, plural). Adjectives agree in gender and number: el libro rojo (the red book), la mesa roja (the red table). The personal 'a' precedes direct object people: 'Veo a María' (I see María). Questions use inverted question marks: ¿Cómo estás? Double negatives are standard: 'No tengo nada' (I don't have anything).",
    'Vocabulary': "Essential Spanish vocabulary includes greetings: Hola (hello), Buenos días (good morning), Buenas noches (good night), Adiós (goodbye). Days: lunes, martes, miércoles, jueves, viernes, sábado, domingo. Family: padre (father), madre (mother), hermano (brother), hermana (sister). Numbers: uno, dos, tres, cuatro, cinco (1-5). Common phrases: ¿Cómo estás? (How are you?), Me llamo... (My name is...), ¿Hablas inglés? (Do you speak English?).",
    'Conversation': "Basic Spanish conversations follow social norms. Introductions: 'Hola, me llamo Carlos. Mucho gusto.' (Hello, my name is Carlos. Nice to meet you.) At restaurants: 'Quisiera ver el menú, por favor' (I would like to see the menu, please). Asking directions: '¿Dónde está...?' (Where is...?). Polite phrases: 'Por favor' (please), 'Gracias' (thank you), 'De nada' (you're welcome). Use 'usted' (formal you) with elders/strangers and 'tú' (informal you) with friends.",
    'Pronunciation': "Spanish pronunciation is relatively consistent. Vowels have pure sounds: a (ah), e (eh), i (ee), o (oh), u (oo). Most consonants are similar to English, but: 'r' is rolled/flipped, 'll' sounds like 'y', 'j' is a harsh 'h' sound, 'ñ' sounds like 'ny' in 'canyon', 'v' and 'b' sound similar. Stress usually falls on the second-to-last syllable unless marked with an accent: 'teléfono'. Each letter is pronounced—there are no silent letters except 'h'.",
    'Verb Conjugation': "Spanish verb conjugation changes by person and tense. Present tense for -ar verbs (hablar - to speak): yo hablo, tú hablas, él/ella habla, nosotros hablamos, vosotros habláis, ellos/ellas hablan. Ser (to be, permanent): soy, eres, es, somos, sois, son. Estar (to be, temporary): estoy, estás, está, estamos, estáis, están. Preterite tense (completed past): hablé, hablaste, habló, hablamos, hablasteis, hablaron.",
    'Spanish Culture': "Spanish and Latin American cultures are diverse and vibrant. Siesta is a traditional afternoon rest period, though less common in modern cities. Meals are social events: lunch (comida) is the main meal around 2-3 PM. Important celebrations include Día de los Muertos (Day of the Dead) honoring deceased loved ones, and local fiestas with parades and traditional music. Flamenco combines guitar, singing, and dancing, originating in Andalusia. Family is central to social life, with multiple generations often gathering for meals."
  }
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [demoMode, setDemoMode] = useState(true);
  const [currentSubject, setCurrentSubject] = useState('history');
  const [currentSubcategory, setCurrentSubcategory] = useState('');
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);
  
  const [uploadedNotes, setUploadedNotes] = useState([]);
  const [uploadSubject, setUploadSubject] = useState('history');
  const [uploadContent, setUploadContent] = useState('');
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadSaved, setUploadSaved] = useState(false);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  
  const [quizActive, setQuizActive] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizScore, setQuizScore] = useState(null);
  const [quizLoading, setQuizLoading] = useState(false);

  const subjects = {
    history: {
      name: 'History',
      icon: BookOpen,
      color: 'amber',
      gradient: 'from-amber-50 to-orange-50',
      subcategories: ['Ancient History', 'Medieval History', 'Modern History', 'World Wars', 'American History', 'European History'],
      subcategoryExamples: {
        'Ancient History': ['What was life like in ancient Rome?', 'How were the pyramids built?'],
        'Medieval History': ['What was the feudal system?', 'What caused the Crusades?'],
        'Modern History': ['What was the Industrial Revolution?', 'How did the Enlightenment change society?'],
        'World Wars': ['What caused WWI?', 'How did WWII begin?'],
        'American History': ['What caused the American Revolution?', 'What was the Civil Rights Movement?'],
        'European History': ['What caused the Protestant Reformation?', 'How did the Renaissance change Europe?']
      },
      examples: ['What caused WWI?', 'How did the Silk Road work?']
    },
    science: {
      name: 'Science',
      icon: Atom,
      color: 'blue',
      gradient: 'from-blue-50 to-cyan-50',
      subcategories: ['Physics', 'Chemistry', 'Biology', 'Astronomy', 'Earth Science', 'Environmental Science'],
      subcategoryExamples: {
        'Physics': ['What is Newton\'s first law?', 'How does gravity work?'],
        'Chemistry': ['What is the periodic table?', 'How do chemical bonds form?'],
        'Biology': ['How does photosynthesis work?', 'What is DNA?'],
        'Astronomy': ['How do stars form?', 'What is a black hole?'],
        'Earth Science': ['What causes earthquakes?', 'How do volcanoes work?'],
        'Environmental Science': ['What is climate change?', 'What is biodiversity?']
      },
      examples: ['How does photosynthesis work?', 'What causes earthquakes?']
    },
    math: {
      name: 'Math',
      icon: Calculator,
      color: 'purple',
      gradient: 'from-purple-50 to-pink-50',
      subcategories: ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'Trigonometry', 'Discrete Math'],
      subcategoryExamples: {
        'Algebra': ['How do I solve quadratic equations?', 'What is the quadratic formula?'],
        'Geometry': ['What is the Pythagorean theorem?', 'How do I find area of a circle?'],
        'Calculus': ['What are derivatives?', 'What is integration?'],
        'Statistics': ['How do I calculate mean and median?', 'What is standard deviation?'],
        'Trigonometry': ['What are sine, cosine, tangent?', 'How does the unit circle work?'],
        'Discrete Math': ['What is set theory?', 'What are permutations?']
      },
      examples: ['What is the Pythagorean theorem?', 'What are derivatives?']
    },
    english: {
      name: 'English',
      icon: PenTool,
      color: 'green',
      gradient: 'from-green-50 to-emerald-50',
      subcategories: ['Grammar', 'Literature', 'Writing', 'Poetry', 'Essay Writing', 'Reading Comprehension'],
      subcategoryExamples: {
        'Grammar': ['When do I use commas?', 'What are parts of speech?'],
        'Literature': ['What is symbolism?', 'How do I analyze characters?'],
        'Writing': ['How do I write an opening paragraph?', 'What makes good writing?'],
        'Poetry': ['What is meter in poetry?', 'What are rhyme schemes?'],
        'Essay Writing': ['How do I write a thesis?', 'What is essay structure?'],
        'Reading Comprehension': ['How do I identify main ideas?', 'What is inference?']
      },
      examples: ['How do I write a thesis?', 'What is a metaphor?']
    },
    french: {
      name: 'French',
      icon: Languages,
      color: 'indigo',
      gradient: 'from-indigo-50 to-blue-50',
      subcategories: ['Grammar', 'Vocabulary', 'Conversation', 'Pronunciation', 'Verb Conjugation', 'French Culture'],
      subcategoryExamples: {
        'Grammar': ['What are French articles?', 'How do adjectives agree?'],
        'Vocabulary': ['What are common greetings?', 'How do I talk about food?'],
        'Conversation': ['How do I introduce myself?', 'What are restaurant phrases?'],
        'Pronunciation': ['How do I pronounce vowels?', 'What is liaison?'],
        'Verb Conjugation': ['How do I conjugate -er verbs?', 'What is passé composé?'],
        'French Culture': ['What are French dining customs?', 'What is café culture?']
      },
      examples: ['How do I conjugate -er verbs?', 'What is tu vs vous?']
    },
    spanish: {
      name: 'Spanish',
      icon: Languages,
      color: 'rose',
      gradient: 'from-rose-50 to-orange-50',
      subcategories: ['Grammar', 'Vocabulary', 'Conversation', 'Pronunciation', 'Verb Conjugation', 'Spanish Culture'],
      subcategoryExamples: {
        'Grammar': ['What are Spanish articles?', 'How do adjectives agree?'],
        'Vocabulary': ['What are common greetings?', 'How do I talk about family?'],
        'Conversation': ['How do I introduce myself?', 'What are polite phrases?'],
        'Pronunciation': ['How do I pronounce vowels?', 'What is the r sound?'],
        'Verb Conjugation': ['How do I conjugate -ar verbs?', 'What is preterite tense?'],
        'Spanish Culture': ['What are Spanish holidays?', 'What is siesta culture?']
      },
      examples: ['How do I conjugate ser/estar?', 'What is por vs para?']
    }
  };

  const currentSubjectData = subjects[currentSubject];

  const stats = {
    totalQuestions: savedNotes.length,
    totalUploads: uploadedNotes.length,
    totalNotes: savedNotes.length + uploadedNotes.length,
    subjectBreakdown: {}
  };

  Object.keys(subjects).forEach(subject => {
    const count = savedNotes.filter(note => note.subject === subject).length +
                  uploadedNotes.filter(note => note.subject === subject).length;
    stats.subjectBreakdown[subject] = count;
  });

  const getMockResponse = () => {
    const subjectResponses = mockResponses[currentSubject];
    if (currentSubcategory && subjectResponses[currentSubcategory]) {
      return subjectResponses[currentSubcategory];
    }
    return subjectResponses.default;
  };

  const handleLogin = () => {
    if (!email || !password) {
      setLoginError('Please enter both email and password');
      return;
    }
    if (password.length < 6) {
      setLoginError('Password must be at least 6 characters');
      return;
    }
    setIsLoggedIn(true);
    setLoginError('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setCurrentTab('dashboard');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result.split(',')[1]);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!question.trim() && !selectedImage) {
      setError('Please enter a question or upload an image');
      return;
    }

    setLoading(true);
    setError('');
    setAnswer('');
    setNotes('');
    setNotesSaved(false);

    await new Promise(resolve => setTimeout(resolve, 1500));

    if (demoMode) {
      let response = getMockResponse();
      
      if (selectedImage) {
        response = `[Demo Mode - Image Analysis]\n\n` + response + `\n\nNote: In live mode with AI, I would analyze the uploaded image and provide specific insights based on its content.`;
      }
      
      setAnswer(response);
      setLoading(false);
    } else {
      try {
        let systemPrompt = currentSubjectData.systemPrompt || 'You are a helpful educational assistant.';
        if (currentSubcategory) {
          systemPrompt = `${systemPrompt} Focus on ${currentSubcategory}.`;
        }

        const content = [];
        
        if (selectedImage) {
          content.push({
            type: 'image',
            source: {
              type: 'base64',
              media_type: 'image/jpeg',
              data: selectedImage
            }
          });
        }
        
        if (question.trim()) {
          content.push({
            type: 'text',
            text: question
          });
        } else {
          content.push({
            type: 'text',
            text: 'Please analyze this image and help me understand it in the context of ' + currentSubjectData.name
          });
        }

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.REACT_APP_ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [{ role: 'user', content }],
            system: systemPrompt
          })
        });

        const data = await response.json();
        
        if (data.content && data.content[0]) {
          setAnswer(data.content[0].text);
        } else {
          setError('No response received. Please try again.');
        }
      } catch (err) {
        setError('Failed to get answer. Please try again.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSaveNotes = () => {
    const newNote = {
      id: Date.now(),
      subject: currentSubject,
      subcategory: currentSubcategory,
      question: question,
      answer: answer,
      notes: notes,
      hasImage: !!selectedImage,
      date: new Date().toLocaleDateString()
    };
    
    setSavedNotes([newNote, ...savedNotes]);
    setNotesSaved(true);
    setTimeout(() => setNotesSaved(false), 3000);
  };

  const handleDeleteNote = (id) => {
    setSavedNotes(savedNotes.filter(note => note.id !== id));
  };

  const handleGoBack = () => {
    setQuestion('');
    setAnswer('');
    setNotes('');
    setError('');
    setNotesSaved(false);
    setSelectedImage(null);
    setImagePreview('');
  };

  const handleUploadNotes = () => {
    if (!uploadTitle.trim() || !uploadContent.trim()) {
      setError('Please provide both a title and content');
      return;
    }

    const newUpload = {
      id: Date.now(),
      subject: uploadSubject,
      title: uploadTitle,
      content: uploadContent,
      date: new Date().toLocaleDateString()
    };

    setUploadedNotes([newUpload, ...uploadedNotes]);
    setUploadTitle('');
    setUploadContent('');
    setUploadSaved(true);
    setTimeout(() => setUploadSaved(false), 3000);
  };

  const handleDeleteUpload = (id) => {
    setUploadedNotes(uploadedNotes.filter(note => note.id !== id));
  };

  const handleSubjectChange = (subject) => {
    setCurrentSubject(subject);
    setCurrentSubcategory('');
    setQuestion('');
    setAnswer('');
    setNotes('');
    setError('');
  };

  const handleExportPDF = (note, type) => {
    const content = type === 'ai' 
      ? `${note.question}\n\nAnswer:\n${note.answer}\n\nYour Notes:\n${note.notes || 'No notes'}`
      : `${note.title}\n\n${note.content}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type === 'ai' ? note.question.substring(0, 50) : note.title}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateQuiz = async () => {
    if (uploadedNotes.length === 0) {
      setError('Please upload some notes first to generate a quiz!');
      return;
    }

    setQuizLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 2000));

    if (demoMode) {
      const mockQuiz = {
        questions: [
          {
            question: "What is the primary purpose of studying this subject?",
            options: [
              "To understand fundamental concepts",
              "To memorize facts",
              "To pass exams",
              "To impress others"
            ],
            correct: 0
          },
          {
            question: "Which approach is most effective for learning?",
            options: [
              "Passive reading",
              "Active practice and application",
              "Watching videos only",
              "Cramming before tests"
            ],
            correct: 1
          },
          {
            question: "What role does review play in retention?",
            options: [
              "It's unnecessary",
              "Only helpful for difficult topics",
              "Critical for long-term memory",
              "Only needed before exams"
            ],
            correct: 2
          },
          {
            question: "How should you approach complex problems?",
            options: [
              "Give up quickly",
              "Skip them entirely",
              "Break them into smaller steps",
              "Always ask for help immediately"
            ],
            correct: 2
          },
          {
            question: "What's the best way to prepare for assessments?",
            options: [
              "Last-minute cramming",
              "Consistent study over time",
              "Memorizing without understanding",
              "Copying from others"
            ],
            correct: 1
          }
        ]
      };

      setQuizQuestions(mockQuiz.questions);
      setCurrentQuizQuestion(0);
      setQuizAnswers([]);
      setQuizScore(null);
      setQuizActive(true);
      setQuizLoading(false);
    } else {
      try {
        const noteContent = uploadedNotes.slice(0, 3).map(n => n.content).join('\n\n');
        
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.REACT_APP_ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [{
              role: 'user',
              content: `Based on these notes, generate 5 multiple choice questions. Return ONLY valid JSON with this exact format, no other text:
{"questions": [{"question": "text", "options": ["A", "B", "C", "D"], "correct": 0}]}

Notes: ${noteContent}`
            }],
            system: 'You are a quiz generator. Return only valid JSON, no markdown formatting or extra text.'
          })
        });

        const data = await response.json();
        const text = data.content[0].text.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(text);
        
        setQuizQuestions(parsed.questions);
        setCurrentQuizQuestion(0);
        setQuizAnswers([]);
        setQuizScore(null);
        setQuizActive(true);
      } catch (err) {
        setError('Failed to generate quiz. Please try again.');
        console.error('Error:', err);
      } finally {
        setQuizLoading(false);
      }
    }
  };

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...quizAnswers, answerIndex];
    setQuizAnswers(newAnswers);

    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      const score = newAnswers.reduce((acc, ans, idx) => 
        ans === quizQuestions[idx].correct ? acc + 1 : acc, 0
      );
      setQuizScore(score);
    }
  };

  const resetQuiz = () => {
    setQuizActive(false);
    setQuizQuestions([]);
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setQuizScore(null);
  };

  const filteredNotes = () => {
    let notes = [];
    
    if (searchFilter === 'all' || searchFilter === 'ai') {
      notes = [...notes, ...savedNotes.map(n => ({ ...n, type: 'ai' }))];
    }
    if (searchFilter === 'all' || searchFilter === 'uploads') {
      notes = [...notes, ...uploadedNotes.map(n => ({ ...n, type: 'upload' }))];
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      notes = notes.filter(note => 
        (note.question?.toLowerCase().includes(query)) ||
        (note.answer?.toLowerCase().includes(query)) ||
        (note.notes?.toLowerCase().includes(query)) ||
        (note.title?.toLowerCase().includes(query)) ||
        (note.content?.toLowerCase().includes(query))
      );
    }

    return notes.sort((a, b) => b.id - a.id);
  };

  const getColorClasses = (color, type = 'bg') => {
    const colors = {
      amber: { bg: 'bg-amber-600 hover:bg-amber-700', text: 'text-amber-700', bgLight: 'bg-amber-50', ring: 'ring-amber-500' },
      blue: { bg: 'bg-blue-600 hover:bg-blue-700', text: 'text-blue-700', bgLight: 'bg-blue-50', ring: 'ring-blue-500' },
      purple: { bg: 'bg-purple-600 hover:bg-purple-700', text: 'text-purple-700', bgLight: 'bg-purple-50', ring: 'ring-purple-500' },
      green: { bg: 'bg-green-600 hover:bg-green-700', text: 'text-green-700', bgLight: 'bg-green-50', ring: 'ring-green-500' },
      indigo: { bg: 'bg-indigo-600 hover:bg-indigo-700', text: 'text-indigo-700', bgLight: 'bg-indigo-50', ring: 'ring-indigo-500' },
      rose: { bg: 'bg-rose-600 hover:bg-rose-700', text: 'text-rose-700', bgLight: 'bg-rose-50', ring: 'ring-rose-500' }
    };
    return colors[color][type];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoggedIn) {
        handleLogin();
      } else if (currentTab === 'ask') {
        handleSubmit();
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
              <BookOpen className="w-10 h-10 text-amber-600" />
              <Atom className="w-10 h-10 text-blue-600" />
              <Calculator className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Subjects AI</h1>
            <p className="text-gray-600">Your Complete Learning Platform</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sign In</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="demo@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="password123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-800">{loginError}</p>
                </div>
              )}

              <button
                onClick={handleLogin}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Sign In
              </button>

              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>🎭 Demo Mode Active!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const SubjectIcon = currentSubjectData.icon;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentSubjectData.gradient}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-6 relative">
          <div className="absolute left-0 top-0 flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md">
            <span className="text-sm font-medium text-gray-700">
              {demoMode ? '🎭 Demo' : '🚀 Live'}
            </span>
            <button
              onClick={() => setDemoMode(!demoMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                demoMode ? 'bg-blue-600' : 'bg-green-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  demoMode ? 'translate-x-1' : 'translate-x-6'
                }`}
              />
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="absolute right-0 top-0 flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
          
          <div className="flex items-center justify-center mb-3">
            <SubjectIcon className={`w-10 h-10 ${getColorClasses(currentSubjectData.color, 'text')}`} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Subjects AI</h1>
          <p className="text-gray-600">
            {currentSubcategory 
              ? `Learning ${currentSubcategory} in ${currentSubjectData.name}`
              : `Your Complete Learning Platform`}
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800 text-center">
            {demoMode 
              ? '🎭 Demo Mode!' 
              : '🚀 Live Mode: Using real AI API.'}
          </p>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'ask', label: 'Ask AI', icon: Send },
            { id: 'quiz', label: 'Quiz', icon: Brain },
            { id: 'upload', label: 'Uploads', icon: Upload, count: uploadedNotes.length },
            { id: 'notes', label: 'Notes', icon: StickyNote, count: savedNotes.length }
          ].map(tab => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  currentTab === tab.id
                    ? 'bg-white shadow-md text-gray-900'
                    : 'bg-white/50 text-gray-600 hover:bg-white/70'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
                {tab.count !== undefined && <span className="text-xs">({tab.count})</span>}
              </button>
            );
          })}
        </div>

        {/* DASHBOARD TAB */}
        {currentTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">AI Questions</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalQuestions}</p>
                  </div>
                  <Send className="w-10 h-10 text-blue-500" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Uploaded Notes</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalUploads}</p>
                  </div>
                  <Upload className="w-10 h-10 text-green-500" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Notes</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalNotes}</p>
                  </div>
                  <StickyNote className="w-10 h-10 text-purple-500" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notes by Subject</h3>
              <div className="space-y-3">
                {Object.entries(subjects).map(([key, subject]) => {
                  const count = stats.subjectBreakdown[key] || 0;
                  const percentage = stats.totalNotes > 0 ? (count / stats.totalNotes) * 100 : 0;
                  const Icon = subject.icon;
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${getColorClasses(subject.color, 'text')}`} />
                          <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{count} notes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getColorClasses(subject.color, 'bg').split(' ')[0]}`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCurrentTab('ask')}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors text-left"
                >
                  <Send className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="font-medium">Ask AI</p>
                  <p className="text-sm text-gray-600">Get instant answers</p>
                </button>
                <button
                  onClick={() => setCurrentTab('quiz')}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 transition-colors text-left"
                >
                  <Brain className="w-6 h-6 text-purple-500 mb-2" />
                  <p className="font-medium">Take Quiz</p>
                  <p className="text-sm text-gray-600">Test your knowledge</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ASK AI TAB */}
        {currentTab === 'ask' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {Object.entries(subjects).map(([key, subject]) => {
                const Icon = subject.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleSubjectChange(key)}
                    className={`py-2 px-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm ${
                      currentSubject === key
                        ? `${getColorClasses(subject.color, 'bg')} text-white shadow-lg`
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {subject.name}
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Choose a topic:</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCurrentSubcategory('')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                    currentSubcategory === ''
                      ? `${getColorClasses(currentSubjectData.color, 'bg')} text-white`
                      : `${getColorClasses(currentSubjectData.color, 'bgLight')} ${getColorClasses(currentSubjectData.color, 'text')}`
                  }`}
                >
                  All Topics
                </button>
                {currentSubjectData.subcategories.map((subcat) => (
                  <button
                    key={subcat}
                    onClick={() => setCurrentSubcategory(subcat)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      currentSubcategory === subcat
                        ? `${getColorClasses(currentSubjectData.color, 'bg')} text-white`
                        : `${getColorClasses(currentSubjectData.color, 'bgLight')} ${getColorClasses(currentSubjectData.color, 'text')}`
                    }`}
                  >
                    {subcat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your {currentSubcategory || currentSubjectData.name} Question
                </label>
                
                <div className="mb-4">
                  <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors w-fit">
                    <Camera className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">Upload Image (Optional)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  {imagePreview && (
                    <div className="mt-3 relative inline-block">
                      <img src={imagePreview} alt="Upload preview" className="max-w-xs rounded-lg" />
                      <button
                        onClick={() => {
                          setSelectedImage(null);
                          setImagePreview('');
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      currentSubcategory && currentSubjectData.subcategoryExamples[currentSubcategory]
                        ? `e.g., ${currentSubjectData.subcategoryExamples[currentSubcategory][0]}`
                        : `e.g., ${currentSubjectData.examples[0]}`
                    }
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    disabled={loading}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:bg-gray-400 flex items-center gap-2 transition-colors"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    Ask
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {answer && (
              <div className="space-y-6">
                <div className="flex justify-start">
                  <button
                    onClick={handleGoBack}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-white rounded-lg transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    Ask Another Question
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Answer:</h2>
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{answer}</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <StickyNote className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Your Notes</h3>
                  </div>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Write your thoughts here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    rows="6"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={handleSaveNotes}
                      disabled={!notes.trim()}
                      className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:bg-gray-400 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Save Notes
                    </button>
                    {notesSaved && <span className="text-green-600 text-sm font-medium">✓ Saved!</span>}
                  </div>
                </div>
              </div>
            )}

            {!answer && !loading && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {currentSubcategory ? `Try asking about ${currentSubcategory}:` : 'Try asking about:'}
                </h3>
                <div className="grid gap-2">
                  {(currentSubcategory && currentSubjectData.subcategoryExamples[currentSubcategory]
                    ? currentSubjectData.subcategoryExamples[currentSubcategory]
                    : currentSubjectData.examples
                  ).map((example, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuestion(example)}
                      className="text-left px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-gray-700 transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* QUIZ TAB */}
        {currentTab === 'quiz' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            {!quizActive ? (
              <div className="text-center">
                <Brain className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Test Your Knowledge</h2>
                <p className="text-gray-600 mb-6">
                  Generate a quiz based on your uploaded notes to test what you've learned!
                </p>
                <button
                  onClick={generateQuiz}
                  disabled={quizLoading || uploadedNotes.length === 0}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg disabled:bg-gray-400 transition-colors flex items-center gap-2 mx-auto"
                >
                  {quizLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Brain className="w-5 h-5" />}
                  Generate Quiz
                </button>
                {uploadedNotes.length === 0 && (
                  <p className="text-sm text-gray-500 mt-4">Upload some notes first to generate quizzes!</p>
                )}
              </div>
            ) : quizScore === null ? (
              <div>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Question {currentQuizQuestion + 1} of {quizQuestions.length}
                    </h3>
                    <button onClick={resetQuiz} className="text-sm text-gray-600 hover:text-gray-900">
                      Exit Quiz
                    </button>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  {quizQuestions[currentQuizQuestion].question}
                </h4>

                <div className="space-y-3">
                  {quizQuestions[currentQuizQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(idx)}
                      className="w-full text-left px-6 py-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  quizScore >= quizQuestions.length * 0.7 ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  {quizScore >= quizQuestions.length * 0.7 ? (
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  ) : (
                    <Brain className="w-12 h-12 text-yellow-600" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Quiz Complete!</h3>
                <p className="text-4xl font-bold text-purple-600 mb-4">
                  {quizScore} / {quizQuestions.length}
                </p>
                <p className="text-gray-600 mb-6">
                  {quizScore >= quizQuestions.length * 0.7 
                    ? 'Great job! You really know your stuff!' 
                    : 'Keep studying! You\'ll do better next time.'}
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={generateQuiz}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    Try Another Quiz
                  </button>
                  <button
                    onClick={() => { resetQuiz(); setCurrentTab('dashboard'); }}
                    className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* UPLOAD TAB */}
        {currentTab === 'upload' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upload Your Notes</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject</label>
                  <select
                    value={uploadSubject}
                    onChange={(e) => setUploadSubject(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {Object.entries(subjects).map(([key, subject]) => (
                      <option key={key} value={key}>{subject.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Note Title</label>
                  <input
                    type="text"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="e.g., Chapter 5: The Renaissance"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Notes</label>
                  <textarea
                    value={uploadContent}
                    onChange={(e) => setUploadContent(e.target.value)}
                    placeholder="Paste your notes here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    rows="10"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleUploadNotes}
                    disabled={!uploadTitle.trim() || !uploadContent.trim()}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:bg-gray-400 transition-colors"
                  >
                    <Upload className="w-5 h-5" />
                    Upload Notes
                  </button>
                  {uploadSaved && <span className="text-green-600 text-sm font-medium">✓ Uploaded!</span>}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Uploaded Notes</h3>
              
              {uploadedNotes.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No uploaded notes yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {uploadedNotes.map((note) => {
                    const noteSubject = subjects[note.subject];
                    const Icon = noteSubject.icon;
                    return (
                      <div key={note.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                              <Icon className={`w-4 h-4 ${getColorClasses(noteSubject.color, 'text')}`} />
                              <span className="font-medium">{noteSubject.name}</span>
                              <span className="text-gray-300">•</span>
                              <Calendar className="w-4 h-4" />
                              {note.date}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">{note.title}</h4>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleExportPDF(note, 'upload')}
                              className="text-blue-500 hover:text-blue-700 transition-colors p-2"
                              title="Export"
                            >
                              <Download className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDeleteUpload(note.id)}
                              className="text-red-500 hover:text-red-700 transition-colors p-2"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        
                        <div className={`${getColorClasses(noteSubject.color, 'bgLight')} rounded-lg p-4`}>
                          <p className="text-gray-700 text-sm whitespace-pre-wrap line-clamp-4">{note.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* NOTES TAB */}
        {currentTab === 'notes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex gap-3 mb-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your notes..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <select
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="all">All Notes</option>
                  <option value="ai">AI Notes Only</option>
                  <option value="uploads">Uploads Only</option>
                </select>
              </div>
            </div>

            {filteredNotes().length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <StickyNote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No notes found</h3>
                <p className="text-gray-600">
                  {searchQuery ? 'Try a different search term' : 'Start asking questions to create notes!'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNotes().map((note) => {
                  const noteSubject = subjects[note.subject];
                  const Icon = noteSubject.icon;
                  return (
                    <div key={note.id} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <Icon className={`w-4 h-4 ${getColorClasses(noteSubject.color, 'text')}`} />
                            <span className="font-medium">{noteSubject.name}</span>
                            {note.subcategory && (
                              <>
                                <span className="text-gray-300">›</span>
                                <span className="text-xs">{note.subcategory}</span>
                              </>
                            )}
                            <span className="text-gray-300">•</span>
                            <Calendar className="w-4 h-4" />
                            {note.date}
                            {note.type === 'upload' && (
                              <>
                                <span className="text-gray-300">•</span>
                                <Upload className="w-4 h-4" />
                                <span className="text-xs">Uploaded</span>
                              </>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {note.type === 'ai' ? note.question : note.title}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleExportPDF(note, note.type)}
                            className="text-blue-500 hover:text-blue-700 transition-colors p-2"
                            title="Export"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => note.type === 'ai' ? handleDeleteNote(note.id) : handleDeleteUpload(note.id)}
                            className="text-red-500 hover:text-red-700 transition-colors p-2"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      {note.type === 'ai' ? (
                        <>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Answer:</h4>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{note.answer}</p>
                          </div>
                          
                          {note.notes && (
                            <div className={`${getColorClasses(noteSubject.color, 'bgLight')} rounded-lg p-4`}>
                              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <StickyNote className={`w-4 h-4 ${getColorClasses(noteSubject.color, 'text')}`} />
                                Your Notes:
                              </h4>
                              <p className="text-gray-700 text-sm whitespace-pre-wrap">{note.notes}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className={`${getColorClasses(noteSubject.color, 'bgLight')} rounded-lg p-4`}>
                          <p className="text-gray-700 text-sm whitespace-pre-wrap line-clamp-4">{note.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;