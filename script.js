function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    const englishResponses = {
        "hi": "Hey there! What do you need today?",
        "meow": "nyaa~≧∇≦",
        "Fuck": "your mom",
        "hello": "Hello! How can I assist you today?",
        "how": "I'm doing as well as a bot can do! How about you?",
        "weather": "Sorry, I can't provide weather updates. Maybe try a weather app?",
        "bye": "Goodbye!🩷 Have a great day!",
        "thanks": "You're welcome! Happy to help.",
        "good": "Sure, tell me if you need anything",
        "joke": "your life",
        "help": "Sure, I'm here to help! What do you need assistance with?😉",
        "name": "I'm just a chatbot😔, so I don't have a name. But feel free to give me any name you like!",
        "who are you": "I'm a friendly chatbot designed to assist you. Ask me anything!",
        "what can you do": "I can answer questions, tell jokes, and provide information. Try asking me something!",
        "tell me a story": "Once upon a time, in a digital world far, far away...",
        "favorite color": "I don't have a favorite color. What's yours?",
        "love": "I'm just a program, so I don't experience emotions, but I'm here to chat with you!",
        "tell me more": "Sure, what specific topic are you interested in learning more about?",
        "coding": "I love coding! It's how I was created. Do you enjoy coding too?",
        "future": "The future is uncertain, but let's focus on making the present moment great!",
        "music": "While I can't hear, I've heard music is a great way to relax. What's your favorite genre?",
        "pets": "I don't have any pets, but I've heard they make great companions. Do you have any?",
        "movies": "Although I don't watch movies, I can recommend some based on your preferences. What genres do you like?",
        "food": "I don't eat, but I can help you find recipes or recommend restaurants. What's your favorite cuisine?",
        "technology": "Technology is fascinating! What specific tech topics are you interested in?",
        "book": "I don't read books, but I can recommend some based on your interests. What genres do you enjoy?",
        "game": "I don't play games myself, but I can help you find some fun ones. What type of games do you like?",
        "travel": "I haven't traveled, but I can provide information about different places. Where would you like to go?",
        "news": "I don't have real-time news updates😔, but you can check the latest news on a news website.",
        "sports": "Although I don't play sports, I can provide information about them. What's your favorite sport?",
        "history": "History is fascinating! What historical period or event are you interested in?",
        "science": "Science is amazing! What scientific topic are you curious about?",
        "math": "Math is the language of the universe! Do you need help with a math problem?",
        "language": "I can communicate in many languages! Which language are you interested in?",
        "fun fact": "Here's a fun fact: The speed of light is approximately 299,792 kilometers per second!",
        "quote": "Here's a quote for you: 'The only way to do great work is to love what you do.' - Steve Jobs",
        "riddle": "Here's a riddle for you: What has keys but can't open locks? A piano!",
        "advice": "Here's some advice: Always strive to improve yourself and learn new things!",
        "time": "I'm sorry😔, I don't have real-time capabilities. You can check the time on your device.",
        "date": "I'm sorry😔, I don't have real-time capabilities. You can check the date on your device.",
        "day": "I'm sorry😔, I don't have real-time capabilities. You can check the day on your device.",
        "year": "I'm sorry😔, I don't have real-time capabilities. You can check the year on your device.",
        "tell me a joke": "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
        "I need some help": "I'm here to assist you😉.",
        "do you have a quote for me": "Certainly! Here's a quote for you: 'The only way to do great work is to love what you do.' - Steve Jobs",
        "let's talk about music": "Music is a universal language that embodies one of the highest forms of creativity.",
        "what do you know about movies": "Movies are a type of visual communication which uses moving pictures and sound to tell stories or inform people about certain topics.",
        "tell me something about technology": "Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.",
        "can you suggest a good book": "One highly recommended book is 'To Kill a Mockingbird' by Harper Lee.",
        "what's your favorite game": "As an AI, I don't play games, but I can provide information about various games.",
        "do you have any fun facts": "Sure, here's a fun fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs thousands of years old and still perfectly edible!",
        "tell me a riddle": "Sure, here's a riddle for you: What has keys but can't open locks? A piano!",
        "can you give me some advice": "Certainly! Here's some advice: Always strive to improve yourself and learn new things!",
        "what do you know about history": "History is the study of past events, particularly in human affairs.",
        "can you explain some science concepts": "Science is the systematic study of the structure and behavior of the physical and natural world through observation and experiment.",
        "help me with a math problem": "Mathematics is the abstract science of number, quantity, and space.",
        "can you teach me a new language": "Language learning is the process by which humans acquire the capacity to perceive and comprehend language, as well as to produce and use words and sentences to communicate.",
        "what's the latest news": "As an AI, I don't have real-time news updates, but you can check the latest news on a news website.",
        "tell me something about sports": "Sport is all forms of usually competitive physical activity which, through casual or organized participation, aim to use, maintain or improve physical ability and skills while providing entertainment to participants, and in some cases, spectators.",
        "can you recommend a good restaurant": "As an AI, I don't have real-time data, but you can check online reviews or food delivery apps for restaurant recommendations.",
        "what's your favorite food": "As an AI, I don't eat, but I can provide information about various cuisines.",
        "can you suggest a travel destination": "Traveling can be a wonderful experience. Some popular destinations include Paris, New York City, Tokyo, and Sydney.",
        "tell me something about pets": "Pets are domesticated animals that are kept for companionship and enjoyment.",
        "what do you know about coding": "Coding is the process of designing and building an executable computer program to accomplish a specific computing result.",
        "can you recommend a good online course": "There are many great online courses available on platforms like Coursera, edX, and Khan Academy.",
        "tell me something about art": "Art is a diverse range of human activities involving the creation of visual, auditory, or performed artifacts that express the creator's imagination, conceptual ideas, or technical skill.",
        "can you suggest a good workout routine": "A balanced workout routine typically includes a mix of cardio, strength training, and flexibility exercises.",
        "what do you know about meditation": "Meditation is a practice where an individual uses a technique - such as mindfulness, or focusing the mind on a particular object, thought, or activity - to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.",
        "can you recommend a good podcast": "There are many great podcasts available on a variety of topics. Some popular ones include 'Serial', 'The Daily', and 'Stuff You Should Know'.",
        "what's your favorite TV show": "As an AI, I don't watch TV, but I can provide information about various TV shows.",
        "can you suggest a good app": "There are many great apps available depending on your needs. Some popular ones include 'Google Maps' for navigation, 'Duolingo' for language learning, and 'Headspace' for meditation.",
        "what do you know about space exploration": "Space exploration is the discovery and exploration of celestial structures in outer space by means of evolving and growing space technology.",
        "tell me a story": "Once upon a time, in a land far, far away, there was a brave knight who set out on a quest to rescue a princess from a fearsome dragon.",
        "tell me a fun fact": "Sure, here's a fun fact: The world's oldest known recipe is for beer! It's a 4,000-year-old Sumerian recipe inscribed on a clay tablet.",
        "can you share an inspirational quote": "Absolutely! Here's one: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill",
        "challenge me with a riddle": "Sure, here's a riddle for you: The more you take, the more you leave behind. What am I? Footsteps.",
        "give me some historical trivia": "Certainly! Did you know that the Great Fire of London in 1666 started in a bakery on Pudding Lane?",
        "explain a scientific concept to me": "Of course! The theory of relativity, proposed by Albert Einstein, describes the laws of gravity and their relation to other natural forces.",
        "what's your favorite subject": "As a chatbot, I don't have personal preferences, but I can provide information on any subject you're interested in!",
        "teach me something new": "Absolutely! Did you know that octopuses have three hearts?",
        "can you provide math trivia": "Sure, here's some math trivia: Zero is the only number that cannot be represented by Roman numerals.",
        "tell me about a language you like": "I appreciate the beauty of all languages! For instance, French is often called the language of love.",
        "share a piece of art history": "Art history is rich and diverse! For example, the Mona Lisa by Leonardo da Vinci is one of the most famous and intriguing pieces of art.",
        "recommend a meditation technique": "Certainly! Mindfulness meditation is a popular technique that involves focusing on your breath to stay present.",
        "what's your favorite podcast genre": "As a chatbot, I don't have personal preferences, but I can recommend podcasts based on your interests. For instance, 'Radiolab' is a popular podcast that explores scientific and philosophical topics.",
        "recommend a book": "Sure, 'A Brief History of Time' by Stephen Hawking is a great book if you're interested in space and astronomy.",
        "favorite sport": "I don't play sports, but I can provide information about various sports. For instance, soccer is the most popular sport worldwide.",
        "coding language": "There are many coding languages like Python, JavaScript, and Java. Python is known for its simplicity and readability.",
        "online learning": "Online learning is great! Platforms like Coursera and edX offer courses on a wide range of subjects.",
        "art movement": "Art has various movements like Renaissance, Surrealism, and Cubism. The Renaissance was a period of great cultural change and achievement.",
        "fitness goals": "Understanding your fitness goals is important. For instance, if you're aiming for strength training, a routine focusing on weightlifting would be suitable.",
        "meditation techniques": "There are different meditation techniques like mindfulness and transcendental meditation. Mindfulness involves focusing on the present moment without judgment.",
        "podcast genre": "Podcasts cover a wide range of genres such as technology, true crime, and comedy. 'Radiolab' is a popular podcast that explores scientific and philosophical topics.",
        "space aspect": "Space exploration includes aspects like astronomy, space missions, and astrophysics. The Hubble Space Telescope has provided some of the most stunning images of space.",
        "beer recipe": "The world's oldest known recipe is for beer! It's a 4,000-year-old Sumerian recipe inscribed on a clay tablet.",
    };

    const arabicResponses = {
        "مرحبا": "مرحبًا! ماذا يمكنني أن أفعل لك؟",
        "هاي": "السلام عليكم",
        "باي": ":( مع السلامة ",
        "مياو": "ارفع علومك",
        "اهلا": "مرحبا! كيف يمكنني مساعدتك اليوم؟",
        "كيف حالك": "الحمدلله بأفضل من الف روبوت! وماذا عنك؟",
        "الطقس": "عذرًا، لا يمكنني تقديم تحديثات الطقس. ربما يمكنك تجربة تطبيق الطقس؟",
        "وداعا": "وداعًا! أتمنى لك يومًا سعيدًا!",
        "شكرا": "مرحبًا بك! تسعدنا مساعدتك.",
        "نكتة": "حياتك",
        "ساعدني": "معليش",
        "اسمك": "أنا مجرد روبوت دردشة، لذا ليس لدي اسم. يمكنك مناداتي بـ ChatBot!",
        "من انت": "أنا روبوت دردشة ودود مصمم لمساعدتك. اسألني أي شيء!",
        "ماذا يمكنك ان تفعل": "يمكنني الإجابة على الأسئلة وإلقاء النكات وتقديم المعلومات. حاول أن تسألني شيئًا ما!",
        "اخبرني قصة": "ذات يوم، في عالم رقمي بعيد جدًا...",
        "اللون المفضل": "ليس لدي لون مفضل. ما هو لونك؟",
        "احبك": "أنا مجرد برنامج، لذا لا أشعر بمشاعر، ولكني هنا للدردشة معك!",
        "اخبرني المزيد": "بالتأكيد، ما هو الموضوع المحدد الذي ترغب في معرفة المزيد عنه؟",
        "برمجة": "أنا أحب البرمجة! هذه هي الطريقة التي خلقت بها. هل تستمتع بالبرمجة أيضًا؟",
        "المستقبل": "المستقبل غير مؤكد، ولكن دعونا نركز على جعل اللحظة الحالية عظيمة!",
        "موسيقى": "على الرغم من أنني لا أستطيع السماع، فقد سمعت أن الموسيقى هي وسيلة رائعة للاسترخاء. ما هو النوع المفضل لديك؟",
        "حيوانات": "ليس لدي أي حيوانات أليفة، ولكن سمعت أنهم يشكلون رفاقًا رائعين. هل لديك أي منها؟",
        "افلام": "على الرغم من أنني لا أشاهد الأفلام، إلا أنني أستطيع أن أوصي ببعضها بناءً على تفضيلاتك. ما هي الأنواع التي تفضلها؟",
        "اكلة": "أنا لا آكل، ولكن يمكنني مساعدتك في العثور على وصفات أو التوصية بالمطاعم. ما هو مطبخك المفضل؟",
        "تقنية": "التكنولوجيا رائعة! ما هي المواضيع التقنية المحددة التي تهتم بها؟",
        "كتاب": "أنا لا أقرأ الكتب، لكن يمكنني أن أوصي ببعضها بناءً على اهتماماتك. ما هي الأنواع التي تستمتع بها؟",
        "العاب": "أنا لا ألعب الألعاب بنفسي، لكن يمكنني مساعدتك في العثور على بعض الألعاب الممتعة. ما نوع الألعاب التي تحبها؟",
        "سفر": "لم أسافر بعد، لكن يمكنني تقديم معلومات حول أماكن مختلفة. أين تريد أن تذهب؟",
        "اخبار": "ليس لدي تحديثات إخبارية في الوقت الفعلي، لكن يمكنك التحقق من آخر الأخبار على موقع إخباري.",
        "رياضة": "على الرغم من أنني لا أمارس الرياضة، إلا أنني أستطيع تقديم معلومات عنها. ما هي رياضتك المفضلة؟",
        "تاريخ": "التاريخ مذهل! ما هي الفترة التاريخية أو الحدث التاريخي الذي يثير اهتمامك؟",
        "علم": "العلم مدهش! ما هو الموضوع العلمي الذي يثير فضولك؟",
        "رياضيات": "الرياضيات هي لغة الكون! هل تحتاج إلى مساعدة في حل مسألة رياضية؟",
        "اللغات": "يمكنني التواصل بعدة لغات! ما هي اللغة التي تهتم بها؟",
        "حقيقة ممتعة": "هذه حقيقة ممتعة: تبلغ سرعة الضوء حوالي 299,792 كيلومترًا في الثانية!",
        "اقتباس": "هذا اقتباس لك: 'الطريقة الوحيدة للقيام بعمل عظيم هي أن تحب ما تفعله.' - ستيف جوبز",
        "لغز": "إليك اللغز: ما هو الشيء الذي لديه مفاتيح ولكن لا يمكنه فتح الأقفال؟ البيانو!",
        "نصيحة": "إليك بعض النصائح: اسعى دائمًا إلى تحسين نفسك وتعلم أشياء جديدة!",
        "الوقت": "أنا آسف، ليس لدي إمكانيات الوقت الفعلي. يمكنك التحقق من الوقت على جهازك.",
        "التاريخ": "أنا آسف، ليس لدي إمكانيات الوقت الفعلي. يمكنك التحقق من التاريخ على جهازك.",
        "اليوم": "أنا آسف، ليس لدي إمكانيات في الوقت الفعلي. يمكنك التحقق من اليوم على جهازك.",
        "السنة": "أنا آسف، ليس لدي إمكانيات في الوقت الفعلي. يمكنك التحقق من السنة على جهازك.",
        "قل لي نكتة": "لماذا ذهب الكمبيوتر للعلاج؟ كان به الكثير من البايتات من الأمتعة العاطفية!",
        "احتاج الى المساعدة": "أنا هنا لمساعدتك.",
        "هل لديك اقتباس": "بالتأكيد! إليك اقتباس لك: 'الطريقة الوحيدة للقيام بعمل عظيم هي أن تحب ما تفعله.' - ستيف جوبز",
        "ماذا تعرف عن الموسيقى": "الموسيقى هي لغة عالمية تجسد أحد أعلى أشكال الإبداع.",
        "ماذا تعرف عن الأفلام": "الأفلام هي أحد أنواع التواصل المرئي الذي يستخدم الصور المتحركة والصوت لسرد القصص أو إعلام الأشخاص حول موضوعات معينة.",
        "اخبرني شيئا عن التكنولوجيا": "التكنولوجيا هي مجموع التقنيات والمهارات والأساليب والعمليات المستخدمة في إنتاج السلع أو الخدمات أو في تحقيق الأهداف، مثل البحث العلمي.",
        "هل يمكنك اقتراح كتاب لي": "أحد الكتب الموصى بها بشدة هو كتاب 'قتل الطائر المحاكي' للكاتب هاربر لي.",
        "ما هي لعبتك المفضلة": "باعتباري شخصًا يعتمد على الذكاء الاصطناعي، فأنا لا ألعب الألعاب، ولكن يمكنني تقديم معلومات حول العديد من الألعاب.",
        "هل لديك اي حقائق ممتعة": "بالتأكيد، إليك حقيقة ممتعة: العسل لا يفسد أبدًا. لقد وجد علماء الآثار أوانيًا بها عسل في مقابر مصرية قديمة عمرها آلاف السنين وما زالت صالحة للتحلل.",
    };

    const suggestions = {
        "en": [
            "Can you tell me a joke?",
            "I need some help.",
            "Do you have a quote for me?",
            "Let's talk about music.",
            "What do you know about movies?",
            "Tell me something about technology.",
            "Can you suggest a good book?",
            "What's your favorite game?",
            "Do you have any fun facts?",
            "Tell me a riddle.",
            "Can you give me some advice?",
            "What do you know about history?",
            "Can you explain some science concepts?",
            "Help me with a math problem.",
            "Can you teach me a new language?",
            "What's the latest news?",
            "Tell me something about sports.",
            "Can you recommend a good restaurant?",
            "What's your favorite food?",
            "Can you suggest a travel destination?",
            "Tell me something about pets.",
            "What do you know about coding?",
            "Can you recommend a good online course?",
            "Tell me something about art.",
            "Can you suggest a good workout routine?",
            "What do you know about meditation?",
            "Can you recommend a good podcast?",
            "What's your favorite TV show?",
            "Can you suggest a good app?",
            "What do you know about space exploration?",
            "Tell me a fun fact.",
            "Can you share an inspirational quote?",
            "Challenge me with a riddle.",
            "Give me some historical trivia.",
            "Explain a scientific concept to me.",
            "What's your favorite subject?",
            "Teach me something new.",
            "Can you provide math trivia?",
            "Tell me about a language you like.",
            "Share a piece of art history.",
            "Recommend a meditation technique.",
            "What's your favorite podcast genre?",
            "Recommend a book",
        ],
        "ar": [
            "هل يمكنك أن تروي لي نكتة؟",
            "أحتاج إلى بعض المساعدة.",
            "هل لديك اقتباس لي؟",
            "لنتحدث عن الموسيقى.",
            "ماذا تعرف عن الأفلام؟",
            "أخبرني شيئًا عن التكنولوجيا.",
            "هل يمكنك اقتراح كتاب جيد؟",
            "ما هي لعبتك المفضلة؟",
            "هل لديك أي حقائق ممتعة؟",
            "أخبرني بلغز.",
            "هل يمكنك إعطائي بعض النصائح؟",
            "ماذا تعرف عن التاريخ؟",
            "هل يمكنك شرح بعض مفاهيم العلوم؟",
            "ساعدني في حل مشكلة رياضية.",
            "هل يمكنك تعليمي لغة جديدة؟",
            "ما هي أحدث الأخبار؟",
            "أخبرني شيئًا عن الرياضة.",
            "هل يمكنك توصيل مطعم جيد؟",
            "ما هو طعامك المفضل؟",
            "هل يمكنك اقتراح وجهة سفر؟",
            "أخبرني شيئًا عن الحيوانات الأليفة.",
            "ماذا تعرف عن البرمجة؟",
            "هل يمكنك توجيهي إلى دورة على الإنترنت جيدة؟",
            "أخبرني شيئًا عن الفن.",
            "هل يمكنك اقتراح نمط تمرين جيد؟",
            "ماذا تعرف عن التأمل؟",
            "هل يمكنك اقتراح بودكاست جيد؟",
            "ما هو عرض التلفزيون المفضل لديك؟",
            "هل يمكنك اقتراح تطبيق جيد؟",
            "ماذا تعرف عن استكشاف الفضاء؟",
            "روي لي حقيقة ممتعة.",
            "هل يمكنك مشاركة اقتباس إلهامي؟",
            "تحديني بلغز.",
            "قدم لي بعض المعلومات التاريخية.",
            "شرح مفهوم علمي لي.",
            "ما هو موضوعك المفضل؟",
            "علمني شيئًا جديدًا.",
            "هل يمكنك تقديم حقائق رياضية؟",
            "أخبرني عن لغة تحبها.",
            "شارك تاريخًا فنيًا.",
            "اقترح تقنية للتأمل.",
            "ما هو نوع بودكاستك المفضل؟",
            "قدم لي كتابًا.",
        ],
    };

    let botMessage;

    // Check for specific words in user input
    for (const pattern of Object.keys(englishResponses)) {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(lowerCaseMessage)) {
            botMessage = englishResponses[pattern];
            break;
        }
    }

    if (!botMessage) {
        for (const word of Object.keys(arabicResponses)) {
            if (lowerCaseMessage.includes(word)) {
                botMessage = arabicResponses[word];
                break;
            }
        }
    }

    

    if (!botMessage) {
        const language = /[a-z]/i.test(lowerCaseMessage) ? "en" : "ar";
        const randomIndex = Math.floor(Math.random() * suggestions[language].length);
        botMessage = {
            type: 'suggestion',
            suggestions: suggestions[language].slice(randomIndex, randomIndex + 3),
        };
    }

    return botMessage;
}

function handleButtonClick(suggestion) {
    var userInput = document.getElementById("user-input");
    userInput.value = suggestion;
    sendMessage();
}

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var chatMessages = document.getElementById("chat-messages");

    var userMessage = userInput.value.trim();
    chatMessages.innerHTML += '<div><strong>Rgd:</strong> ' + userMessage + '</div>';

    var botMessage = getBotResponse(userMessage);

    if (typeof botMessage === 'string') {
        chatMessages.innerHTML += '<div><strong>Chatbot:</strong> ' + botMessage + '</div>';
    } else {
        if (/[a-z]/i.test(userMessage)) {
            chatMessages.innerHTML += '<div><strong>Chatbot:</strong> Hmm🤔, I didn\'t quite catch that. Could you rephrase? Or you can try one of these options:</div>';
        } else {
            chatMessages.innerHTML += '<div><strong>Chatbot:</strong> عذرًا🤨 ، لم أفهم ذلك. هل يمكنك إعادة صياغته؟ أو يمكنك تجربة واحدة من هذه الخيارات:</div>';
        }
        for (let i = 0; i < botMessage.suggestions.length; i++) {
            chatMessages.innerHTML += `<button class="suggestion-button" onclick="handleButtonClick('${botMessage.suggestions[i]}')">${botMessage.suggestions[i]}</button>`;
        }        
    }

    userInput.value = '';
    userInput.focus();
}
