// ------------------ Shared Helpers ------------------ //
// ------------------ Data for Explanations ------------------ //

console.log("✅ numerology.js loaded");

// Disable Right Click
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//     alert("⚠️ Right-click is disabled for this page.");
// });

// Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
// document.addEventListener('keydown', function (e) {
//     if (
//         e.key === "F12" ||
//         (e.ctrlKey && e.shiftKey && e.key === 'I') ||
//         (e.ctrlKey && e.key === 'U') ||
//         (e.ctrlKey && e.key === 'S')
//     ) {
//         e.preventDefault();
//         alert("⚠️ Developer tools and shortcuts are disabled.");
//     }
// });

// Optional: Prevent text selection
// document.addEventListener('selectstart', function (e) {
//     e.preventDefault();
// });


const POSITIVE_PAIR = "(+)";
const NEGATIVE_PAIR = "(-)";
const NEUTRAL_PAIR = "(+/-)";

const data = {
    personality: {
        1: { en: "Bold, independent, and confident. Natural leaders with strong willpower. Often take initiative and have a strong public image.", hi: "साहसी, स्वतंत्र और आत्मविश्वासी। स्वाभाविक नेता होते हैं जिनमें मजबूत इच्छाशक्ति होती है। पहल करने वाले और प्रभावशाली व्यक्तित्व के धनी होते हैं।" },
        2: { en: "Gentle, diplomatic, and peace-loving. Naturally cooperative and supportive. Excellent in partnerships and maintaining harmony.", hi: "विनम्र, कूटनीतिक और शांतिप्रिय। स्वभाव से सहयोगी और संतुलन बनाए रखने में माहिर। साझेदारी और संबंधों में कुशल।" },
        3: { en: "Expressive, joyful, and optimistic. Creative and socially engaging. Do well in communication, arts, and media.", hi: "अभिव्यक्तिपूर्ण, आनंददायक और आशावादी। रचनात्मक और सामाजिक रूप से सक्रिय। संचार, कला और मीडिया में सफल।" },
        4: { en: "Practical, disciplined, and hardworking. Systematic in approach with strong organizational abilities. May appear serious or rigid.", hi: "मेहनती। योजनाबद्ध तरीके से काम करने वाले और संगठनात्मक क्षमताओं से भरपूर। कभी-कभी गंभीर और कठोर लग सकते हैं।" },
        5: { en: "Energetic, adaptable, and freedom-loving. Great in communication and change. Thrive in travel, marketing, and dynamic environments.", hi: "ऊर्जावान, लचीले और स्वतंत्रता पसंद। संचार और बदलाव में दक्ष। यात्रा, मार्केटिंग और गतिशील क्षेत्रों में उन्नति।" },
        6: { en: "Responsible, nurturing, and beauty-loving. Harmonious in relationships. Often involved in art, family, healing or teaching.", hi: "जिम्मेदार, देखभाल करने वाले और सौंदर्यप्रिय। रिश्तों में सामंजस्यपूर्ण। कला, परिवार, चिकित्सा या शिक्षा के क्षेत्र में सफल।" },
        7: { en: "Thoughtful, introspective, and spiritual. Seek knowledge, research, and inner truth. May appear private or mysterious.", hi: "विचारशील, आत्मविश्लेषी और आध्यात्मिक। ज्ञान, अनुसंधान और आत्म-खोज की ओर झुकाव। रहस्यमय या निजी स्वभाव के हो सकते हैं।" },
        8: { en: "Authoritative, ambitious, and materialistic. Strive for power and financial success. Appear strong, determined, and goal-oriented.", hi: "प्रभावशाली, महत्वाकांक्षी और भौतिक सफलता की ओर केंद्रित। शक्ति और धन प्राप्त करने का लक्ष्य रखते हैं। मजबूत इच्छाशक्ति और लक्ष्य के प्रति समर्पित।" },
        9: { en: "Compassionate, emotional, and idealistic. Born to serve and lead with passion. Often seen in humanitarian, spiritual, or service fields.", hi: "करुणामय, भावनात्मक और आदर्शवादी। सेवा और नेतृत्व के लिए जन्में होते हैं। सामाजिक, आध्यात्मिक या मानव सेवा के क्षेत्रों में अग्रणी।" }
    },
    destiny: {
        1: { en: "Very strong willpower, leadership ability, success in great achievements. Potential to become a politician, leader, or industrialist.", hi: "बहुत मजबूत आत्मबल, नेतृत्व क्षमता, महान कार्यों में सफलता। राजनीतिज्ञ, लीडर, इंडस्ट्रियलिस्ट बनने की संभावना।" },
        2: { en: "Cooperative, calm, harmony-loving. Success in work related to relationships, family, and collaboration. Effective as a diplomat, healer, or counselor.", hi: "सहयोगी, शांत, संतुलन प्रिय। संबंध, परिवार, सहयोग से जुड़े कार्यों में सफलता। डिप्लोमैट, हीलर, काउंसलर के रूप में प्रभावी।" },
        3: { en: "Creative, skilled in speaking and writing. Success in education, media, arts, or public speaking. An inspiring personality.", hi: "रचनात्मक, बोलने-लिखने में दक्ष। शिक्षा, मीडिया, कला, पब्लिक स्पीकिंग में सफलता। प्रेरणादायक व्यक्तित्व।" },
        4: { en: "Hardworking, disciplined, and systematic thinker. Success in administration, technical, or planning-related work. Due to Rahu's influence, results come with delay.", hi: "मेहनती, अनुशासित, सिस्टमेटिक सोच वाले। प्रशासन, टेक्निकल या प्लानिंग कार्यों में सफलता। राहु प्रभाव से देर से फल मिलता है।" },
        5: { en: "A life path full of independence, speed, and cleverness. Success in travel, marketing, media, or business. However, stability needs to be maintained.", hi: "स्वतंत्रता, तेजी और चतुराई वाला जीवन पथ। ट्रैवल, मार्केटिंग, मीडिया, बिजनेस में सफलता। लेकिन स्थिरता बनानी पड़ती है।" },
        6: { en: "Life path connected with service, beauty, and responsibility. Progress in medicine, fashion, teaching, or social service. Family plays a major role.", hi: "सेवा, सौंदर्य और ज़िम्मेदारी से जुड़ा जीवन पथ। चिकित्सा, फैशन, टीचिंग या समाज सेवा में उन्नति। परिवार प्रमुख भूमिका निभाता है।" },
        7: { en: "Path of knowledge, mystery, and self-discovery. Direction connected to research, philosophy, astrology, yoga, meditation, or science. Sometimes experiences solitude.", hi: "ज्ञान, रहस्य और आत्म-खोज का मार्ग। रिसर्च, दर्शन, ज्योतिष, योग, ध्यान या विज्ञान से जुड़ी दिशा। कभी-कभी एकाकीपन।" },
        8: { en: "Path of power, authority, and wealth. Success in law, administration, politics, management, or business after struggles. Results come late in life.", hi: "शक्ति, अधिकार और धन का मार्ग। लॉ, प्रशासन, राजनीति, मैनेजमेंट या व्यापार में संघर्षों के बाद सफलता। जीवन में देरी से फल।" },
        9: { en: "A life path filled with service, sacrifice, and ideals. High position in police, army, religion, social service, or NGOs. Control over anger is necessary.", hi: "सेवा, त्याग और आदर्शों से भरा जीवन पथ। पुलिस, सेना, धर्म, समाज सेवा या एनजीओ में उच्च स्थान। क्रोध पर नियंत्रण आवश्यक।" }
    },
    pairs: {
        1: { en: "Leadership pair", hi: "नेतृत्व का संयोजन" },
        2: { en: "Cooperation pair", hi: "सहयोगी संयोजन" },
        3: { en: "Creative pair", hi: "रचनात्मक संयोजन" },
        4: { en: "Practical pair", hi: "व्यवहारिक संयोजन" },
        5: { en: "Flexible pair", hi: "लचीला संयोजन" },
        6: { en: "Caring pair", hi: "सजग संयोजन" },
        7: { en: "Spiritual pair", hi: "आध्यात्मिक संयोजन" },
        8: { en: "Authoritative pair", hi: "अधिकारशाली संयोजन" },
        9: { en: "Passionate pair", hi: "उत्साही संयोजन" },


        "11": {
            en: "Will give good leadership qualities but will make little aggressive (Very aggressive, egoistic, and never listen anybody : 111)",
            hi: "अच्छे नेतृत्व के गुण देंगे लेकिन थोड़ा आक्रामक बनेंगे (बहुत आक्रामक, अहंकारी, और कभी किसी की नहीं सुनेंगेः 111)",
            nature: POSITIVE_PAIR
        },
        "22": {
            en: "You will help others but you yourself will remain at the same place. Also makes you a loaner.(Emotionally instable, addiction, mood swings : 222)",
            hi: "आप दूसरों की मदद करेंगे लेकिन आप स्वयं उसी स्थान पर रहेंगे। यह आपको कर्जदार भी बनाता है।(भावनात्मक रूप से अस्थिर, लत, मनोदशा में उतार-चढ़ावः 222)",
            nature: NEGATIVE_PAIR
        },
        "33": {
            en: "Will have so much blessing of Guru and will make you knowledgeable. Will give you attitude of hardwork. You will get attracted towards God and will be good for Occult Science. (Lack of working attitude : 333)",
            hi: "गुरु का इतना आशीर्वाद मिलेगा और आपको ज्ञानी बनाएगा। आपको कड़ी मेहनत का रवैया देगा। आप भगवान की ओर आकर्षित होंगे और गुप्त विज्ञान के लिए अच्छे होंगे। (काम करने की मनोवृत्ति की कमीः 333)",
            nature: POSITIVE_PAIR
        },
        "44": {
            en: "SHOULD NEVER BE IN MOBILE NO",
            hi: "कभी भी मोबाइल नंबर में नहीं होना चाहिए",
            nature: NEGATIVE_PAIR
        },
        "55": {
            en: "Good for communication or filed of communication. (you won't express well : 555)",
            hi: "संचार या संचार के लिए अच्छा है। (आप अच्छी तरह से व्यक्त नहीं करेंगेः 555)",
            nature: POSITIVE_PAIR
        },
        "66": {
            en: "Inclination towards Luxury, materialistic world, brands, food, fun (mauj masti).(Extra Marital Affairs/Relationship Issues/disturbance in luxury : 666)",
            hi: "विलासिता, भौतिकवादी दुनिया, ब्रांड, भोजन, मनोरंजन (मौज मस्ती) की ओर झुकाव (अतिरिक्त वैवाहिक मामले/रिश्ते के मुद्दे/विलासिता में गड़बड़ीः 666)",
            nature: POSITIVE_PAIR
        },
        "77": {
            en: "Gives high confidence and good for social networking, (Social Networking skill disturbed, confidence either high or too low  & gives back pain if: 777)",
            hi: "उच्च आत्मविश्वास देता है और सोशल नेटवर्किंग के लिए अच्छा है, (सोशल नेटवर्किंग कौशल बाधित, आत्मविश्वास या तो उच्च या बहुत कम और पीठ दर्द देता है यदिः 777)",
            nature: POSITIVE_PAIR
        },
        "88": {
            en: "Struggle will increase in life whether for health, wealth or relation.",
            hi: "स्वास्थ्य, धन या संबंध के लिए जीवन में संघर्ष बढ़ेगा।",
            nature: NEGATIVE_PAIR
        },
        "99": {
            en: "Gives very good energy level. (May use their energy in Aggression : 999)",
            hi: "बहुत अच्छा ऊर्जा स्तर देता है। (आक्रामकता में अपनी ऊर्जा का उपयोग कर सकते हैंः 999)",
            nature: POSITIVE_PAIR
        },
        "12": {
            en: "Makes you money saving, attractive, strong, educated & financially stable person.",
            hi: "यह आपको पैसे बचाने वाला, आकर्षक, मजबूत, शिक्षित और आर्थिक रूप से स्थिर व्यक्ति बनाता है।",
            nature: POSITIVE_PAIR
        },
        "21": {
            en: "Makes you Extravagant, sensitive in nature & attention seeker person. May give some allergies.",
            hi: "यह आपको असाधारण, संवेदनशील और ध्यान आकर्षित करने वाला व्यक्ति बनाता है। कुछ एलर्जी हो सकती है।",
            nature: NEGATIVE_PAIR
        },
        "13": {
            en: "Brings bad luck as unlucky number. Gives Obstacles in work. Good adviser. Never Listen to others. Learn from their experiences.",
            hi: "दुर्भाग्यपूर्ण संख्या के रूप में दुर्भाग्य लाता है। काम में अड़चनें डालता है। अच्छे सलाहकार हैं। दूसरों की बात कभी न सुनें। उनके अनुभवों से सीखें।",
            nature: NEGATIVE_PAIR
        },
        "31": {
            en: "Gives good health, name fame, good jobs & good marriage life. Good for advisors/Consultants & spiritual leaders. Kids should be given this no as it gives hunger for knowledge. Possibility of high rank in Govt.",
            hi: "अच्छा स्वास्थ्य, नाम प्रसिद्धि, अच्छी नौकरी और अच्छा वैवाहिक जीवन देता है। सलाहकारों/आध्यात्मिक नेताओं के लिए अच्छा है। बच्चों को यह नंबर दिया जाना चाहिए क्योंकि यह ज्ञान के लिए भूख देता है। सरकार में उच्च पद की संभावना।",
            nature: POSITIVE_PAIR
        },
        "14": {
            en: "Gives hidden enemies & allegation of work even not done by you. Loans & liabilities may be high and Govt. notices may be received. Gives sufferings, Defamation & loss of money. Family life will be disturbed.",
            hi: "छिपे हुए दुश्मनों और आपके द्वारा नहीं किए गए काम का आरोप भी देता है। ऋण और देनदारियाँ अधिक हो सकती हैं और सरकारी नोटिस मिल सकते हैं। पीड़ा, मानहानि और धन की हानि देता है। पारिवारिक जीवन में उतार-चढ़ाव रहेगा।",
            nature: NEGATIVE_PAIR
        },
        "41": {
            en: "Gives hidden enemies & allegation of work even not done by you. Loans & liabilities may be high and Govt. notices may be received. Gives sufferings, Defamation & loss of money. Family life will be disturbed.",
            hi: "छिपे हुए दुश्मनों और आपके द्वारा नहीं किए गए काम का आरोप भी देता है। ऋण और देनदारियाँ अधिक हो सकती हैं और सरकारी नोटिस मिल सकते हैं। पीड़ा, मानहानि और धन की हानि देता है। पारिवारिक जीवन में उतार-चढ़ाव रहेगा।",
            nature: NEGATIVE_PAIR
        },
        "15": {
            en: "Get successful in exams/competition. Money earning through less efforts. Get support of father. Denotes intelligence of a person. Support marriage. (More powerful)",
            hi: "परीक्षा/प्रतियोगिता में सफल हों। कम प्रयासों से पैसा कमाना। पिता का सहयोग प्राप्त करें। किसी व्यक्ति की बुद्धि को दर्शाता है। विवाह का समर्थन करें। (अधिक शक्तिशाली)",
            nature: POSITIVE_PAIR
        },
        "51": {
            en: "Get successful in exams/competition. Earn through less efforts. Get support of father. Denotes intelligence of a person. Support marriage. (Less powerful than 15 though same results)",
            hi: "परीक्षा/प्रतियोगिता में सफल हों। कम प्रयासों से पैसा कमाना। पिता का सहयोग प्राप्त करें। किसी व्यक्ति की बुद्धि को दर्शाता है। विवाह का समर्थन करें। (15 से थोड़ा कम शक्तिशाली)",
            nature: POSITIVE_PAIR
        },
        "16": {
            en: "Health of partner may be effected. Bad relation with spouse and struggle in relation with other people. Money and Job loss. Causes UTI problems or piles.",
            hi: "जीवनसाथी का स्वास्थ्य बिगड़ सकता है। जीवनसाथी के साथ खराब संबंध और अन्य लोगों के साथ संबंध में संघर्ष। धन और नौकरी की हानि। यूटीआई की समस्या या बवासीर का कारण बनता है।",
            nature: NEGATIVE_PAIR
        },
        "61": {
            en: "Health of partner may be effected. Bad relation with spouse and struggle in relation with other people. Money and Job loss. Causes UTI problems or piles.",
            hi: "जीवनसाथी का स्वास्थ्य बिगड़ सकता है। जीवनसाथी के साथ खराब संबंध और अन्य लोगों के साथ संबंध में संघर्ष। धन और नौकरी की हानि। यूटीआई की समस्या या बवासीर का कारण बनता है।",
            nature: NEGATIVE_PAIR
        },
        "17": {
            en: "Promotes or attracts Government Jobs or related work. Gives good leadership qualities.",
            hi: "सरकारी नौकरियों या संबंधित कार्यों को बढ़ावा देता है या आकर्षित करता है। अच्छे नेतृत्व गुण देता है।",
            nature: POSITIVE_PAIR
        },
        "71": {
            en: "Promotes or attracts Government Jobs or related work. Gives good leadership qualities.",
            hi: "सरकारी नौकरियों या संबंधित कार्यों को बढ़ावा देता है या आकर्षित करता है। अच्छे नेतृत्व गुण देता है।",
            nature: POSITIVE_PAIR
        },
        "18": {
            en: "Gives arguments or disputes with father. Government related problems. Ups and down in career & financial instability. Humiliation by In-laws.",
            hi: "पिता के साथ बहस या विवाद करता है। सरकार से जुड़ी समस्याएं। करियर में उतार-चढ़ाव और वित्तीय अस्थिरता। ससुराल वालों द्वारा अपमान।",
            nature: NEGATIVE_PAIR
        },
        "81": {
            en: "Gives arguments or disputes with father. Government related problems. Ups and down in career & financial instability. Humiliation by In-laws.",
            hi: "पिता के साथ बहस या विवाद करता है। सरकार से जुड़ी समस्याएं। करियर में उतार-चढ़ाव और वित्तीय अस्थिरता। ससुराल वालों द्वारा अपमान।",
            nature: NEGATIVE_PAIR
        },
        "19": {
            en: "Gives unearned money. Makes you passionate about work and gives leadership qualities. Makes you very good in your work. Gives Independence in life (views or any manner) and good moral values.",
            hi: "अनर्जित धन देता है। आपको काम के प्रति जुनूनी बनाता है और नेतृत्व के गुण देता है। यह आपको अपने काम में बहुत अच्छा बनाता है। जीवन में स्वतंत्रता (विचार या किसी भी तरह से) और अच्छे नैतिक मूल्य देता है।",
            nature: POSITIVE_PAIR
        },
        "91": {
            en: "Gives unearned money. Makes you passionate about work and gives leadership qualities. Makes you very good in your work. Gives Independence in life (views or any manner) and good moral values.",
            hi: "अनर्जित धन देता है। आपको काम के प्रति जुनूनी बनाता है और नेतृत्व के गुण देता है। यह आपको अपने काम में बहुत अच्छा बनाता है। जीवन में स्वतंत्रता (विचार या किसी भी तरह से) और अच्छे नैतिक मूल्य देता है।",
            nature: POSITIVE_PAIR
        },
        "23": {
            en: "Gives winover quality in competition/Enemies. Argument/disputes with children. Possibility of Extra martial affairs. (No is good if  negative aspects can be controlled)",
            hi: "प्रतियोगिता/दुश्मनों में जीत की गुणवत्ता देता है। बच्चों के साथ बहस/विवाद। अतिरिक्त मार्शल अफेयर्स की संभावना। (यदि नकारात्मक पहलुओं को नियंत्रित किया जा सकता है तो नहीं अच्छा है)",
            nature: NEUTRAL_PAIR
        },
        "32": {
            en: "Gives winover quality in competition/Enemies. Argument/disputes with children. Possibility of Extra martial affairs. (No is good if  negative aspects can be controlled)",
            hi: "प्रतियोगिता/दुश्मनों में जीत की गुणवत्ता देता है। बच्चों के साथ बहस/विवाद। अतिरिक्त मार्शल अफेयर्स की संभावना। (यदि नकारात्मक पहलुओं को नियंत्रित किया जा सकता है तो नहीं अच्छा है)",
            nature: NEUTRAL_PAIR
        },
        "24": {
            en: "Gives negative mindset, mood swings and instability. Looks like you are busy without work.",
            hi: "नकारात्मक मानसिकता, मनोदशा में बदलाव और अस्थिरता देता है। ऐसा लगता है कि आप बिना काम के व्यस्त हैं।",
            nature: NEGATIVE_PAIR
        },
        "42": {
            en: "Gives negative mindset, mood swings and instability. Looks like you are busy without work.",
            hi: "नकारात्मक मानसिकता, मनोदशा में बदलाव और अस्थिरता देता है। ऐसा लगता है कि आप बिना काम के व्यस्त हैं।",
            nature: NEGATIVE_PAIR
        },
        "25": {
            en: "It is a no of magical powers and blessed by God and it is a no for healers. Good for people in Occult science or spirituality (Numerologists/Pronologist/Astrologist, etc.). Gods hand is on you always and you blessed with divine blessing.",
            hi: "यह जादुई शक्तियों की संख्या है और भगवान द्वारा आशीर्वादित है और यह चिकित्सकों के लिए नहीं है। गूढ़ विज्ञान या आध्यात्मिकता (अंकविज्ञानी/प्रोनेलॉजिस्ट/ज्योतिषी, आदि) में लोगों के लिए अच्छा है। भगवान का हाथ हमेशा आप पर है और आपको दिव्य आशीर्वाद मिला है।",
            nature: POSITIVE_PAIR
        },
        "52": {
            en: "It is a no of magical powers and blessed by God and it is a no for healers. Good for people in Occult science or spirituality (Numerologists/Pronologist/Astrologist, etc.). Gods hand is on you always and you blessed with divine blessing.",
            hi: "यह जादुई शक्तियों की संख्या है और भगवान द्वारा आशीर्वादित है और यह चिकित्सकों के लिए नहीं है। गूढ़ विज्ञान या आध्यात्मिकता (अंकविज्ञानी/प्रोनेलॉजिस्ट/ज्योतिषी, आदि) में लोगों के लिए अच्छा है। भगवान का हाथ हमेशा आप पर है और आपको दिव्य आशीर्वाद मिला है।",
            nature: POSITIVE_PAIR
        },
        "26": {
            en: "Strong convincing Power. Hurdles in education and change in education streams. If in Govt Job then will see frequent transfers. Issues in family or with In-laws. Possibility of second marriage.",
            hi: "दृढ़ विश्वास करने वाली शक्ति। शिक्षा में बाधाएं और शिक्षा धाराओं में बदलाव। अगर सरकारी नौकरी में हैं तो बार-बार तबादले देखने को मिलेंगे। परिवार या ससुराल में समस्याएं। दूसरी शादी की संभावना।",
            nature: NEGATIVE_PAIR
        },
        "62": {
            en: "Strong convincing Power. Hurdles in education and change in education streams. If in Govt Job then will see frequent transfers. Issues in family or with In-laws. Possibility of second marriage.",
            hi: "दृढ़ विश्वास करने वाली शक्ति। शिक्षा में बाधाएं और शिक्षा धाराओं में बदलाव। अगर सरकारी नौकरी में हैं तो बार-बार तबादले देखने को मिलेंगे। परिवार या ससुराल में समस्याएं। दूसरी शादी की संभावना।",
            nature: NEGATIVE_PAIR
        },
        "27": {
            en: "Ups and down in life. Issues in profession and Business. Downfall in Business. Pain in Joints",
            hi: "जीवन में ऊपर और नीचे। पेशे और व्यवसाय में मुद्दे। व्यापार में गिरावट। जोड़ों में दर्द",
            nature: NEGATIVE_PAIR
        },
        "72": {
            en: "Ups and down in life. Issues in profession and Business. Downfall in Business. Pain in Joints",
            hi: "जीवन में ऊपर और नीचे। पेशे और व्यवसाय में मुद्दे। व्यापार में गिरावट। जोड़ों में दर्द",
            nature: NEGATIVE_PAIR
        },
        "28": {
            en: "Partnership Business may go wrong (loss) so better do independent Business. Sometimes have depression. Gives emotional instability. In family somebody will have two marriages.",
            hi: "साझेदारी व्यवसाय गलत (हानि) हो सकता है इसलिए बेहतर होगा कि स्वतंत्र व्यवसाय करें। कभी-कभी अवसाद होता है। भावनात्मक अस्थिरता देता है। परिवार में किसी की दो शादियाँ होंगी।",
            nature: NEGATIVE_PAIR
        },
        "82": {
            en: "Partnership Business may go wrong (loss) so better do independent Business. Sometimes have depression. Gives emotional instability. In family somebody will have two marriages.",
            hi: "साझेदारी व्यवसाय गलत (हानि) हो सकता है इसलिए बेहतर होगा कि स्वतंत्र व्यवसाय करें। कभी-कभी अवसाद होता है। भावनात्मक अस्थिरता देता है। परिवार में किसी की दो शादियाँ होंगी।",
            nature: NEGATIVE_PAIR
        },
        "29": {
            en: "Gives very good financial status. Money is earned through honesty. Chances of extra marital affairs. (No is good if this negative aspect can be controlled)",
            hi: "बहुत अच्छी आर्थिक स्थिति देता है। ईमानदारी से पैसा कमाया जाता है। विवाहेतर संबंधों की संभावनाएँ। (यदि इस नकारात्मक पहलू को नियंत्रित किया जा सकता है तो नहीं अच्छा है)",
            nature: POSITIVE_PAIR
        },
        "92": {
            en: "Gives very good financial status. Money is earned through honesty. Chances of extra marital affairs. (No is good if this negative aspect can be controlled)",
            hi: "बहुत अच्छी आर्थिक स्थिति देता है। ईमानदारी से पैसा कमाया जाता है। विवाहेतर संबंधों की संभावनाएँ। (यदि इस नकारात्मक पहलू को नियंत्रित किया जा सकता है तो नहीं अच्छा है)",
            nature: POSITIVE_PAIR
        },
        "34": {
            en: "Gives strong will power. Kids will not stay with parents. Gives breathing issues.",
            hi: "दृढ़ इच्छा शक्ति देता है। बच्चे माता-पिता के साथ नहीं रहेंगे। सांस लेने में तकलीफ होती है। ",
            nature: NEUTRAL_PAIR
        },
        "43": {
            en: "Gives strong will power. Kids will not stay with parents. Gives breathing issues.",
            hi: "दृढ़ इच्छा शक्ति देता है। बच्चे माता-पिता के साथ नहीं रहेंगे। सांस लेने में तकलीफ होती है। ",
            nature: NEUTRAL_PAIR
        },
        "35": {
            en: "Gives financial Problems. You will have to leave parental property and you won't stay with parents.",
            hi: "आर्थिक समस्याएँ देता है। आपको माता-पिता की संपत्ति छोड़नी होगी और आप माता-पिता के साथ नहीं रहेंगे। ",
            nature: NEGATIVE_PAIR
        },
        "53": {
            en: "Gives financial Problems. You will have to leave parental property and you won't stay with parents.",
            hi: "आर्थिक समस्याएँ देता है। आपको माता-पिता की संपत्ति छोड़नी होगी और आप माता-पिता के साथ नहीं रहेंगे। ",
            nature: NEGATIVE_PAIR
        },
        "36": {
            en: "Makes you highly knowledgeable (Google Baba), multi-talented, very spiritual & religious. Gives high attitude & very high self respect. Makes you a person of own rules & regulation.",
            hi: "आपको अत्यधिक जानकार (गूगल बाबा) बहु-प्रतिभाशाली, बहुत आध्यात्मिक और धार्मिक बनाता है। उच्च दृष्टिकोण और बहुत उच्च आत्म सम्मान देता है। आपको अपने नियमों और विनियमों का व्यक्ति बनाता है।",
            nature: POSITIVE_PAIR
        },
        "63": {
            en: "Makes you highly knowledgeable (Google Baba), multi-talented, very spiritual & religious. Gives high attitude & very high self respect. Makes you a person of own rules & regulation.",
            hi: "आपको अत्यधिक जानकार (गूगल बाबा) बहु-प्रतिभाशाली, बहुत आध्यात्मिक और धार्मिक बनाता है। उच्च दृष्टिकोण और बहुत उच्च आत्म सम्मान देता है। आपको अपने नियमों और विनियमों का व्यक्ति बनाता है।",
            nature: POSITIVE_PAIR
        },
        "37": {
            en: "Makes you knowledgeable and successful. Bring you to the top position in your respective field. Gets financial support easily. You will never harm anybody.",
            hi: "यह आपको जानकार और सफल बनाता है। आपको अपने संबंधित क्षेत्र में शीर्ष स्थान पर लाएं। आसानी से आर्थिक सहायता मिल जाती है। आप कभी किसी को नुकसान नहीं पहुँचाएँगे।",
            nature: POSITIVE_PAIR
        },
        "73": {
            en: "Makes you knowledgeable and successful. Bring you to the top position in your respective field. Gets financial support easily. You will never harm anybody.",
            hi: "यह आपको जानकार और सफल बनाता है। आपको अपने संबंधित क्षेत्र में शीर्ष स्थान पर लाएं। आसानी से आर्थिक सहायता मिल जाती है। आप कभी किसी को नुकसान नहीं पहुँचाएँगे।",
            nature: POSITIVE_PAIR
        },
        "38": {
            en: "Good for Sales Professional/Advisors/Consultants/Property Dealers",
            hi: "बिक्री पेशेवर/सलाहकार/सलाहकार/संपत्ति विक्रेताओं के लिए अच्छा",
            nature: POSITIVE_PAIR
        },
        "83": {
            en: "Good for Sales Professional/Advisors/Consultants/Property Dealers",
            hi: "बिक्री पेशेवर/सलाहकार/सलाहकार/संपत्ति विक्रेताओं के लिए अच्छा",
            nature: POSITIVE_PAIR
        },
        "39": {
            en: "Makes you show off person or dual face personality. Makes you big debaters.",
            hi: "यह आपको व्यक्ति या दोहरे चेहरे वाले व्यक्तित्व का प्रदर्शन कराता है। यह आपको बड़ा बहस करने वाला बनाता है।",
            nature: NEUTRAL_PAIR
        },
        "93": {
            en: "Makes you show off person or dual face personality. Makes you big debaters.",
            hi: "यह आपको व्यक्ति या दोहरे चेहरे वाले व्यक्तित्व का प्रदर्शन कराता है। यह आपको बड़ा बहस करने वाला बनाता है।",
            nature: NEUTRAL_PAIR
        },
        "45": {
            en: "Makes you Intelligent & wise. Gives weak eyesight. Gives Litigation & hospitalization. Bandhan Dosh.",
            hi: "यह आपको बुद्धिमान और बुद्धिमान बनाता है। कमजोर दृष्टि देता है। मुकदमेबाजी और अस्पताल में भर्ती होने की अनुमति देता है। बंधन दोष।",
            nature: NEGATIVE_PAIR
        },
        "54": {
            en: "Makes you Intelligent & wise. Gives weak eyesight. Gives Litigation & hospitalization. Bandhan Dosh.",
            hi: "यह आपको बुद्धिमान और बुद्धिमान बनाता है। कमजोर दृष्टि देता है। मुकदमेबाजी और अस्पताल में भर्ती होने की अनुमति देता है। बंधन दोष।",
            nature: NEGATIVE_PAIR
        },
        "46": {
            en: "Gives skin and Piles problem. You can be a rape victim or doer. Chances of extra marital affairs are very high. Makes you very attractive. Avoid to have this no in children's mobile.",
            hi: "त्वचा और बवासीर की समस्या देता है। आप बलात्कार के शिकार या अपराधी हो सकते हैं। विवाहेतर संबंधों की संभावना बहुत अधिक है। यह आपको बहुत आकर्षक बनाता है। बच्चों के मोबाइल में इस नंबर को रखने से बचें।",
            nature: NEGATIVE_PAIR
        },
        "64": {
            en: "Gives skin and Piles problem. You can be a rape victim or doer. Chances of extra marital affairs are very high. Makes you very attractive. Avoid to have this no in children's mobile.",
            hi: "त्वचा और बवासीर की समस्या देता है। आप बलात्कार के शिकार या अपराधी हो सकते हैं। विवाहेतर संबंधों की संभावना बहुत अधिक है। यह आपको बहुत आकर्षक बनाता है। बच्चों के मोबाइल में इस नंबर को रखने से बचें।",
            nature: NEGATIVE_PAIR
        },
        "47": {
            en: "Makes you clever, intelligent & Out of the box thinkers. Gives Strong determination & will power. Good for Service Provider/Consultants/Sales Professionals/Coaching/teaching.",
            hi: "आपको चतुर, बुद्धिमान और लीक से हटकर सोचने वाले बनाता है। दृढ़ संकल्प और इच्छा शक्ति देता है। सेवा प्रदाता/सलाहकार/बिक्री पेशेवर/कोचिंग/शिक्षण के लिए अच्छा है।",
            nature: POSITIVE_PAIR
        },
        "74": {
            en: "Makes you clever, intelligent & Out of the box thinkers. Gives Strong determination & will power. Good for Service Provider/Consultants/Sales Professionals/Coaching/teaching.",
            hi: "आपको चतुर, बुद्धिमान और लीक से हटकर सोचने वाले बनाता है। दृढ़ संकल्प और इच्छा शक्ति देता है। सेवा प्रदाता/सलाहकार/बिक्री पेशेवर/कोचिंग/शिक्षण के लिए अच्छा है।",
            nature: POSITIVE_PAIR
        },
        "48": {
            en: "Chances of Chronic illness/disease with long medication. Gives Injuries or accidents. Gives bad married life. And gives depression, stress & health issues.",
            hi: "लंबी दवा के साथ पुरानी बीमारी/बीमारी की संभावना। चोटें या दुर्घटनाएँ देता है। खराब वैवाहिक जीवन देता है। और अवसाद, तनाव और स्वास्थ्य संबंधी समस्याएं देता है।",
            nature: NEGATIVE_PAIR
        },
        "84": {
            en: "Chances of Chronic illness/disease with long medication. Gives Injuries or accidents. Gives bad married life. And gives depression, stress & health issues.",
            hi: "लंबी दवा के साथ पुरानी बीमारी/बीमारी की संभावना। चोटें या दुर्घटनाएँ देता है। खराब वैवाहिक जीवन देता है। और अवसाद, तनाव और स्वास्थ्य संबंधी समस्याएं देता है।",
            nature: NEGATIVE_PAIR
        },
        "49": {
            en: "Success after very hard work. Can do risky jobs or any work that others can't do. Gives litigation/hospitalization, either way. Good for Army/police job (Uniform Job).",
            hi: "कड़ी मेहनत के बाद सफलता मिलेगी। जोखिम भरा काम या कोई ऐसा काम कर सकते हैं जो दूसरे नहीं कर सकते। मुकदमेबाजी/अस्पताल में भर्ती होना, किसी भी तरह से देता है। सेना/पुलिस की नौकरी के लिए अच्छा (वर्दी की नौकरी)",
            nature: NEGATIVE_PAIR
        },
        "94": {
            en: "Success after very hard work. Can do risky jobs or any work that others can't do. Gives litigation/hospitalization, either way. Good for Army/police job (Uniform Job).",
            hi: "कड़ी मेहनत के बाद सफलता मिलेगी। जोखिम भरा काम या कोई ऐसा काम कर सकते हैं जो दूसरे नहीं कर सकते। मुकदमेबाजी/अस्पताल में भर्ती होना, किसी भी तरह से देता है। सेना/पुलिस की नौकरी के लिए अच्छा (वर्दी की नौकरी)",
            nature: NEGATIVE_PAIR
        },
        "56": {
            en: "You cannot ask for your own money back as very shy. Makes you money minded (Paisa Paisa in all talks)",
            hi: "आप बहुत शर्मिंदा होकर अपने पैसे वापस नहीं मांग सकते। आपको पैसे के दिमाग वाला बनाता है (सभी वार्ताओं में पैसा पैसा)",
            nature: NEGATIVE_PAIR
        },
        "65": {
            en: "You cannot ask for your own money back as very shy. Makes you money minded (Paisa Paisa in all talks)",
            hi: "आप बहुत शर्मिंदा होकर अपने पैसे वापस नहीं मांग सकते। आपको पैसे के दिमाग वाला बनाता है (सभी वार्ताओं में पैसा पैसा)",
            nature: NEGATIVE_PAIR
        },
        "57": {
            en: "Gives good communication skills and makes you good public speaker. Carry quality of true business man. Good for Astrologers/Numerologers.",
            hi: "अच्छा संवाद कौशल देता है और आपको अच्छा सार्वजनिक वक्ता बनाता है। सच्चे व्यवसायी की गुणवत्ता को अपने साथ रखें। ज्योतिषियों/अंकशास्त्रियों के लिए अच्छा है।",
            nature: POSITIVE_PAIR
        },
        "75": {
            en: "Gives good communication skills and makes you good public speaker. Carry quality of true business man. Good for Astrologers/Numerologers.",
            hi: "अच्छा संवाद कौशल देता है और आपको अच्छा सार्वजनिक वक्ता बनाता है। सच्चे व्यवसायी की गुणवत्ता को अपने साथ रखें। ज्योतिषियों/अंकशास्त्रियों के लिए अच्छा है।",
            nature: POSITIVE_PAIR
        },
        "58": {
            en: "Gives money blockages due to property or by any other means. May give complete financial loss.",
            hi: "संपत्ति के कारण या किसी अन्य माध्यम से धन अवरोध देता है। पूरी तरह से आर्थिक नुकसान हो सकता है।",
            nature: NEGATIVE_PAIR
        },
        "85": {
            en: "Gives money blockages due to property or by any other means. May give complete financial loss.",
            hi: "संपत्ति के कारण या किसी अन्य माध्यम से धन अवरोध देता है। पूरी तरह से आर्थिक नुकसान हो सकता है।",
            nature: NEGATIVE_PAIR
        },
        "59": {
            en: "Makes you sharp minded and gives immense technical knowledge. Makes you successful businessman. Makes you straight forward and people may judge you. Avoid to have this no in newly married or in new job.",
            hi: "यह आपको तेज दिमाग वाला बनाता है और आपको अपार तकनीकी ज्ञान देता है। आपको सफल व्यवसायी बनाता है। यह आपको सीधा करता है और लोग आपको जज कर सकते हैं। नवविवाहित या नई नौकरी में इस नंबर को रखने से बचें।",
            nature: POSITIVE_PAIR
        },
        "95": {
            en: "Makes you sharp minded and gives immense technical knowledge. Makes you successful businessman. Makes you straight forward and people may judge you. Avoid to have this no in newly married or in new job.",
            hi: "यह आपको तेज दिमाग वाला बनाता है और आपको अपार तकनीकी ज्ञान देता है। आपको सफल व्यवसायी बनाता है। यह आपको सीधा करता है और लोग आपको जज कर सकते हैं। नवविवाहित या नई नौकरी में इस नंबर को रखने से बचें।",
            nature: POSITIVE_PAIR
        },
        "67": {
            en: "Makes you Art and Music lover. Prefer to be unmarried life long. Problem in getting married. Disputes in marriage life (small/khatte-Meethe). Disinterest in marriage. Chances of getting extra marital affairs.",
            hi: "आपको कला और संगीत प्रेमी बनाता है। जीवन भर अविवाहित रहना पसंद करें। शादी करने में समस्या। वैवाहिक जीवन में विवाद (छोटे/खट्टे-मीठे) विवाह में अनासक्ति। विवाहेतर संबंध प्राप्त होने की संभावना।",
            nature: NEGATIVE_PAIR
        },
        "76": {
            en: "Makes you Art and Music lover. Prefer to be unmarried life long. Problem in getting married. Disputes in marriage life (small/khatte-Meethe). Disinterest in marriage. Chances of getting extra marital affairs.",
            hi: "आपको कला और संगीत प्रेमी बनाता है। जीवन भर अविवाहित रहना पसंद करें। शादी करने में समस्या। वैवाहिक जीवन में विवाद (छोटे/खट्टे-मीठे) विवाह में अनासक्ति। विवाहेतर संबंध प्राप्त होने की संभावना।",
            nature: NEGATIVE_PAIR
        },
        "68": {
            en: "Suitable only for Medical Profession People (surgeons, doctors or others who work in hospitals). If someone not in Medical profession then will give health related problems and person will keep going to hospital.",
            hi: "केवल चिकित्सा पेशे वाले लोगों के लिए उपयुक्त (सर्जन, डॉक्टर या अन्य जो अस्पतालों में काम करते हैं) अगर कोई चिकित्सा पेशे में नहीं है तो वह स्वास्थ्य संबंधी समस्याएं देगा और व्यक्ति अस्पताल जाता रहेगा",
            nature: NEGATIVE_PAIR
        },
        "86": {
            en: "Suitable only for Medical Profession People (surgeons, doctors or others who work in hospitals). If someone not in Medical profession then will give health related problems and person will keep going to hospital.",
            hi: "केवल चिकित्सा पेशे वाले लोगों के लिए उपयुक्त (सर्जन, डॉक्टर या अन्य जो अस्पतालों में काम करते हैं) अगर कोई चिकित्सा पेशे में नहीं है तो वह स्वास्थ्य संबंधी समस्याएं देगा और व्यक्ति अस्पताल जाता रहेगा",
            nature: NEGATIVE_PAIR
        },
        "69": {
            en: "Makes you creative worker, planner & gives artistic mind. Suitable for event management, marriage planner, designers etc. Will work with opposite sex people as they don't get well (challenge) with the same gender.",
            hi: "यह आपको रचनात्मक कार्यकर्ता, योजनाकार बनाता है और कलात्मक दिमाग देता है। कार्यक्रम प्रबंधन, विवाह योजनाकार, डिजाइनर आदि के लिए उपयुक्त। विपरीत लिंग के लोगों के साथ काम करेंगे क्योंकि वे समान लिंग के साथ ठीक (चुनौती) नहीं होते हैं।",
            nature: POSITIVE_PAIR
        },
        "96": {
            en: "Makes you creative worker, planner & gives artistic mind. Suitable for event management, marriage planner, designers etc. Will work with opposite sex people as they don't get well (challenge) with the same gender.",
            hi: "यह आपको रचनात्मक कार्यकर्ता, योजनाकार बनाता है और कलात्मक दिमाग देता है। कार्यक्रम प्रबंधन, विवाह योजनाकार, डिजाइनर आदि के लिए उपयुक्त। विपरीत लिंग के लोगों के साथ काम करेंगे क्योंकि वे समान लिंग के साथ ठीक (चुनौती) नहीं होते हैं।",
            nature: POSITIVE_PAIR
        },
        "78": {
            en: "Good for Spirituality and healing profession (doctors/astrologers, etc.). Gives little negative mindset & thought process. Gives Loneliness and person feel like living alone.",
            hi: "आध्यात्मिकता और उपचार पेशे (डॉक्टर/ज्योतिषी, आदि) के लिए अच्छा है। ) थोड़ा नकारात्मक मानसिकता और विचार प्रक्रिया देता है। यह अकेलापन देता है और व्यक्ति को अकेला रहने का मन करता है।",
            nature: POSITIVE_PAIR
        },
        "87": {
            en: "Good for Spirituality and healing profession (doctors/astrologers, etc.). Gives little negative mindset & thought process. Gives Loneliness and person feel like living alone.",
            hi: "आध्यात्मिकता और उपचार पेशे (डॉक्टर/ज्योतिषी, आदि) के लिए अच्छा है। ) थोड़ा नकारात्मक मानसिकता और विचार प्रक्रिया देता है। यह अकेलापन देता है और व्यक्ति को अकेला रहने का मन करता है।",
            nature: POSITIVE_PAIR
        },
        "79": {
            en: "Ups and down in career or life. Gives Blood related issues, joint pains, kidney(that area) issues. If living away from father (or Father In law) then can escape from above issues and will have a better life.",
            hi: "करियर या जीवन में ऊपर और नीचे। रक्त संबंधी समस्याएं, जोड़ों का दर्द, गुर्दे (उस क्षेत्र) की समस्याएं देता है। यदि पिता (या ससुर) से दूर रहते हैं तो उपरोक्त मुद्दों से बच सकते हैं और बेहतर जीवन जी सकते हैं।",
            nature: NEUTRAL_PAIR
        },
        "97": {
            en: "Ups and down in career or life. Gives Blood related issues, joint pains, kidney(that area) issues. If living away from father (or Father In law) then can escape from above issues and will have a better life.",
            hi: "करियर या जीवन में ऊपर और नीचे। रक्त संबंधी समस्याएं, जोड़ों का दर्द, गुर्दे (उस क्षेत्र) की समस्याएं देता है। यदि पिता (या ससुर) से दूर रहते हैं तो उपरोक्त मुद्दों से बच सकते हैं और बेहतर जीवन जी सकते हैं।",
            nature: NEUTRAL_PAIR
        },
        "89": {
            en: "Makes you very good consultant and gives you good vision. Good for Service Providers/stock traders/advocate/consultants. Makes you aggressive by nature and gives sibling issues.",
            hi: "यह आपको बहुत अच्छा सलाहकार बनाता है और आपको अच्छी दृष्टि देता है। सेवा प्रदाताओं/स्टॉक व्यापारियों/अधिवक्ताओं/सलाहकारों के लिए अच्छा है। यह आपको स्वभाव से आक्रामक बनाता है और भाई-बहन को परेशान करता है। ",
            nature: POSITIVE_PAIR
        },
        "98": {
            en: "Makes you very good consultant and gives you good vision. Good for Service Providers/stock traders/advocate/consultants. Makes you aggressive by nature and gives sibling issues.",
            hi: "यह आपको बहुत अच्छा सलाहकार बनाता है और आपको अच्छी दृष्टि देता है। सेवा प्रदाताओं/स्टॉक व्यापारियों/अधिवक्ताओं/सलाहकारों के लिए अच्छा है। यह आपको स्वभाव से आक्रामक बनाता है और भाई-बहन को परेशान करता है। ",
            nature: POSITIVE_PAIR
        }
    }
};

const kuaData = {
    1: {
        en: `Water Element, East Group
            These individuals are creative, intelligent, and full of new ideas.
            Positives: Excellent communication skills, adaptability.
            Negatives: Indecisiveness, emotional instability.
            Success Tip: Set clear goals and build self-confidence.
            Suitable Professions: Writer, journalist, counseling, media, marketing, research, teaching.
            Auspicious Directions (East Group): East, Southeast, North, South.
            Inauspicious: West, Northwest.
            Advice: Don’t hesitate to implement your ideas and learn to balance emotions.`,
        hi: `जल तत्व, East Group
            ऐसे लोग रचनात्मक, बुद्धिमान और नए विचारों के धनी होते हैं।
            पॉज़िटिव—कम्युनिकेशन स्किल, लचीलापन;
            नेगेटिव—निर्णय में देरी और भावनात्मक अस्थिरता।
            सफलता के लिए स्पष्ट लक्ष्य और आत्मविश्वास जरूरी है।
            उपयुक्त प्रोफेशन: लेखक, पत्रकार, काउंसलिंग, मीडिया, मार्केटिंग, रिसर्च, शिक्षा।
            शुभ दिशाएँ (East Group): पूर्व, दक्षिण-पूर्व, उत्तर, दक्षिण; अशुभ—पश्चिम, उत्तर-पश्चिम।
            सलाह: अपने विचारों को लागू करने में हिचकिचाएँ नहीं, और भावनाओं पर नियंत्रण रखें।`
    },
    2: {
        en: `Earth Element, West Group
            These people are dependable, organized, and family-oriented.
            Positives: Patience, responsibility.
            Negatives: Over-cautious, resistant to change.
            Success Tip: Embrace flexibility and be open to new opportunities.
            Suitable Professions: Real estate, agriculture, teaching, finance, administration, consultancy.
            Auspicious Directions (West Group): Southwest, Northwest, West, Northeast.
            Inauspicious: East, Southeast.
            Advice: Welcome new opportunities and stay confident.`,

        hi: `पृथ्वी तत्व, West Group
            ये लोग भरोसेमंद, संगठित और परिवार-केन्द्रित होते हैं। पॉज़िटिव—धैर्य, जिम्मेदारी; नेगेटिव—अत्यधिक सतर्कता और बदलाव से डर। सफलता के लिए लचीलापन और नई चीज़ें अपनाना जरूरी है। उपयुक्त प्रोफेशन: रियल एस्टेट, कृषि, शिक्षा, वित्त प्रबंधन, प्रशासन, कंसल्टेंसी। शुभ दिशाएँ (West Group): दक्षिण-पश्चिम, उत्तर-पश्चिम, पश्चिम, उत्तर-पूर्व; अशुभ—पूर्व, दक्षिण-पूर्व। सलाह: नए अवसरों को अपनाएँ और आत्मविश्वास बनाए रखें।`
    },
    3: {
        en: `Wood Element, East Group
            Energetic, ambitious, and forward-looking personalities.
            Positives: Quick thinking, enthusiasm.
            Negatives: Impulsive, short-tempered.
            Success Tip: Work patiently and plan strategically.
            Suitable Professions: Politics, public relations, sports, business development, sales, architecture.
            Auspicious Directions: East, Southeast, North, South.
            Inauspicious: West, Northwest.
            Advice: Control anger and take thoughtful decisions.`,
        hi: `लकड़ी तत्व, East Group
            ये लोग ऊर्जावान, महत्वाकांक्षी और आगे बढ़ने वाले होते हैं। पॉज़िटिव—तेज़ सोच, उत्साह; नेगेटिव—जल्दबाज़ी, गुस्सा। सफलता के लिए धैर्य और योजना बनाकर काम करना जरूरी है। उपयुक्त प्रोफेशन: राजनीति, पब्लिक रिलेशंस, स्पोर्ट्स, बिज़नेस डेवलपमेंट, सेल्स, आर्किटेक्चर। शुभ दिशाएँ: पूर्व, दक्षिण-पूर्व, उत्तर, दक्षिण; अशुभ—पश्चिम, उत्तर-पश्चिम। सलाह: क्रोध पर नियंत्रण रखें और निर्णय सोच-समझकर लें।`
    },
    4: {
        en: `Wood Element, East Group
            Sociable, charming, and multi-talented individuals.
            Positives: Networking skills, teamwork.
            Negatives: Indecisiveness, lack of consistency.
            Success Tip: Focus on long-term goals and avoid distractions.
            Suitable Professions: Teaching, public speaking, media, event management, trading, travel.
            Auspicious Directions: East, Southeast, North, South.
            Inauspicious: West, Northwest.
            Advice: Avoid changing directions frequently and bring stability to life.`,
        hi: `लकड़ी तत्व, East Group
            ये लोग मिलनसार, आकर्षक और बहु-प्रतिभाशाली होते हैं। पॉज़िटिव—नेटवर्किंग, टीम वर्क; नेगेटिव—अनिश्चितता, जल्दी ऊब जाना। सफलता के लिए फोकस और दीर्घकालिक योजनाओं पर टिके रहना जरूरी है। उपयुक्त प्रोफेशन: शिक्षा, पब्लिक स्पीकिंग, मीडिया, इवेंट मैनेजमेंट, ट्रेडिंग, ट्रैवल। शुभ दिशाएँ: पूर्व, दक्षिण-पूर्व, उत्तर, दक्षिण; अशुभ—पश्चिम, उत्तर-पश्चिम। सलाह: बार-बार दिशा बदलने से बचें और स्थिरता लाएँ।`
    },
    5: {
        en: `Earth Element (Special Case)
            Male (West Group): Strong leadership, strategic thinking.
            Negative: Over-controlling tendencies.
            Auspicious Directions: Southwest, Northwest, West, Northeast.
            Female (East Group): Creative, adaptable.
            Negative: Indecisiveness.
            Auspicious Directions: East, Southeast, North, South.
            Common Professions: Administration, real estate, consultancy, finance, research.
            Advice: Maintain balance and allow others independence.`,
        hi: `पृथ्वी तत्व
            पुरुष (West Group): मजबूत नेतृत्व क्षमता, रणनीतिक सोच; नेगेटिव—अत्यधिक नियंत्रण की प्रवृत्ति। शुभ दिशाएँ: दक्षिण-पश्चिम, उत्तर-पश्चिम, पश्चिम, उत्तर-पूर्व।
            महिला (East Group): रचनात्मकता, अनुकूलन क्षमता; नेगेटिव—निर्णय में अस्थिरता। शुभ दिशाएँ: पूर्व, दक्षिण-पूर्व, उत्तर, दक्षिण।`
    },
    6: {
        en: `Metal Element, West Group
            Decisive, ambitious, and natural leaders.
            Positives: Discipline, clear vision.
            Negatives: Harsh and rigid attitude.
            Success Tip: Stay flexible and value others’ opinions.
            Suitable Professions: Military, police, law, engineering, management, mining, technical fields.
            Auspicious Directions: Northwest, Southwest, West, Northeast.
            Inauspicious: East, Southeast.
            Advice: Be gentle in relationships and encourage teamwork.`,
        hi: `धातु तत्व, West Group
            ये लोग निर्णायक, महत्वाकांक्षी और नेतृत्व में माहिर होते हैं। पॉज़िटिव—अनुशासन, स्पष्ट दृष्टिकोण; नेगेटिव—कठोर रवैया। सफलता के लिए लचीलापन और दूसरों की राय सुनना जरूरी है। उपयुक्त प्रोफेशन: सेना, पुलिस, कानून, इंजीनियरिंग, प्रबंधन, माइनिंग, टेक्निकल फील्ड। शुभ दिशाएँ: उत्तर-पश्चिम, दक्षिण-पश्चिम, पश्चिम, उत्तर-पूर्व; अशुभ—पूर्व, दक्षिण-पूर्व। सलाह: संबंधों में नरमी लाएँ और टीम वर्क को महत्व दें।`
    },
    7: {
        en: `Metal Element, West Group
            Charming, sociable, and opportunistic.
            Positives: Persuasive skills, business sense.
            Negatives: Impatient, wants quick results.
            Success Tip: Develop long-term vision and discipline.
            Suitable Professions: Marketing, sales, entertainment, jewelry, luxury items, media.
            Auspicious Directions: West, Northwest, Southwest, Northeast.
            Inauspicious: East, Southeast.
            Advice: Practice patience and maintain stability.`,
        hi: `धातु तत्व, West Group
            ये लोग आकर्षक, सामाजिक और अवसरवादी होते हैं। पॉज़िटिव—मनाने की कला, बिज़नेस समझ; नेगेटिव—जल्दी परिणाम पाने की लालसा। सफलता के लिए दीर्घकालिक दृष्टि और अनुशासन जरूरी है। उपयुक्त प्रोफेशन: मार्केटिंग, सेल्स, मनोरंजन, ज्वेलरी, लक्ज़री आइटम्स, मीडिया। शुभ दिशाएँ: पश्चिम, उत्तर-पश्चिम, दक्षिण-पश्चिम, उत्तर-पूर्व; अशुभ—पूर्व, दक्षिण-पूर्व। सलाह: धैर्य रखें और स्थिरता बनाएँ।`
    },
    8: {
        en: `Earth Element, West Group
            Practical, steady, and hardworking.
            Positives: Reliability, strong planning.
            Negatives: Slow progress, fear of change.
            Success Tip: Accept new methods and adapt to technology.
            Suitable Professions: Real estate, accounting, agriculture, administration, consultancy, education.
            Auspicious Directions: Northeast, Southwest, West, Northwest.
            Inauspicious: East, Southeast.
            Advice: Embrace change and take timely decisions.`,
        hi: `पृथ्वी तत्व, West Group
            ये लोग व्यावहारिक, स्थिर और मेहनती होते हैं। पॉज़िटिव—विश्वसनीयता, योजना में पक्का; नेगेटिव—धीमी प्रगति, बदलाव से डर। सफलता के लिए नई टेक्नोलॉजी और तरीकों को अपनाना जरूरी है। उपयुक्त प्रोफेशन: रियल एस्टेट, अकाउंटिंग, कृषि, प्रशासन, कंसल्टेंसी, शिक्षा। शुभ दिशाएँ: उत्तर-पूर्व, दक्षिण-पश्चिम, पश्चिम, उत्तर-पश्चिम; अशुभ—पूर्व, दक्षिण-पूर्व। सलाह: बदलाव को अपनाएँ और समय पर निर्णय लें।`
    },
    9: {
        en: `Fire Element, East Group
            Inspiring, dynamic, and charismatic personalities.
            Positives: Visionary outlook, public appeal.
            Negatives: Impulsiveness, instability.
            Success Tip: Maintain focus and consistency.
            Suitable Professions: Media, arts, politics, sports, advertising, motivational speaking.
            Auspicious Directions: South, North, East, Southeast.
            Inauspicious: West, Northwest.
            Advice: Stay patient and channel your energy constructively.`,
        hi: `अग्नि तत्व, East Group
            ये लोग प्रेरणादायी, तेज़ और करिश्माई होते हैं। पॉज़िटिव—विजन, पब्लिक अपील; नेगेटिव—जल्दबाज़ी और अस्थिरता। सफलता के लिए स्थिरता और फोकस जरूरी है। उपयुक्त प्रोफेशन: मीडिया, आर्ट्स, पॉलिटिक्स, स्पोर्ट्स, एडवरटाइजिंग, मोटिवेशनल स्पीकिंग। शुभ दिशाएँ: दक्षिण, उत्तर, पूर्व, दक्षिण-पूर्व; अशुभ—पश्चिम, उत्तर-पश्चिम। सलाह: धैर्य रखें और अपनी ऊर्जा को सही दिशा में लगाएँ।`
    }
};

const nameNumberData = {
    1: {
        en: `The Leader, Independence
            Individuals with name number 1 are natural leaders, confident, and ambitious.
            Positives: Leadership quality, initiative, innovation.
            Negatives: Stubbornness, impatience.
            Success Tip: Cultivate patience and listen to others.
            Suitable Professions: Entrepreneur, manager, pilot, engineer, military.
            Advice: Trust your instincts but remain open to feedback.`,
        hi: `नेतृत्वकर्ता, स्वतंत्रता
            नाम संख्या 1 वाले व्यक्ति स्वाभाविक नेता होते हैं, आत्मविश्वासी और महत्वाकांक्षी।
            पॉज़िटिव—नेतृत्व क्षमता, पहल, नवाचार;
            नेगेटिव—जिद्दी, अधीरता।
            सफलता टिप: धैर्य रखें और दूसरों की बात सुनें।
            उपयुक्त प्रोफेशन: उद्यमी, प्रबंधक, पायलट, अभियंता, सेना।
            सलाह: अपनी अंतर्ज्ञानी पर भरोसा रखें लेकिन प्रतिक्रिया के लिए खुले रहें।`
    },
    2: {
        en: `The Peacemaker, Harmony
            These individuals are cooperative, diplomatic, and sensitive.
            Positives: Empathy, diplomacy, partnership skills.
            Negatives: Over-sensitivity, indecisiveness.
            Success Tip: Build confidence and assert yourself gently.
            Suitable Professions: Counselor, mediator, artist, teacher, therapist.
            Advice: Balance emotions and communicate clearly.`,
        hi: `शांति लाने वाला, मेल-मिलाप
            ऐसे व्यक्ति मिलनसार, कूटनीतिक और संवेदनशील होते हैं।
            पॉज़िटिव—सहानुभूति, कूटनीति, साझेदारी कौशल;
            नेगेटिव—अत्यधिक संवेदनशीलता, निर्णय में कठिनाई।
            सफलता टिप: आत्मविश्वास बनाएं और कोमलता से अपने विचार रखें।
            उपयुक्त प्रोफेशन: सलाहकार, मध्यस्थ, कलाकार, शिक्षक, चिकित्सक।
            सलाह: भावनाओं का संतुलन रखें और स्पष्ट संवाद करें।`
    },
    3: {
        en: `The Communicator, Creativity
            These personalities are expressive, sociable, and optimistic.
            Positives: Creativity, communication, enthusiasm.
            Negatives: Distraction, superficiality.
            Success Tip: Focus your energy and complete tasks.
            Suitable Professions: Writer, artist, public speaker, entertainer.
            Advice: Ground your ideas into reality with discipline.`,
        hi: `संवाददाता, रचनात्मकता
            ये व्यक्तित्व अभिव्यक्तिशील, मिलनसार और आशावादी होते हैं।
            पॉज़िटिव—रचनात्मकता, संचार, उत्साह;
            नेगेटिव—ध्यान भटकना, सतहीपन।
            सफलता टिप: अपनी ऊर्जा केंद्रित करें और कार्य पूर्ण करें।
            उपयुक्त प्रोफेशन: लेखक, कलाकार, वक्ता, मनोरंजनकर्ता।
            सलाह: अनुशासन के साथ अपने विचारों को वास्तविकता बनाएं।`
    },
    4: {
        en: `The Builder, Practicality
            These individuals are hardworking, reliable, and disciplined.
            Positives: Organization, patience, practicality.
            Negatives: Rigidity, resistance to change.
            Success Tip: Stay flexible and welcome new ideas.
            Suitable Professions: Engineer, architect, accountant, administrator.
            Advice: Balance routine with innovation.`,
        hi: `निर्माता, व्यावहारिकता
            ऐसे लोग मेहनती, विश्वसनीय और अनुशासित होते हैं।
            पॉज़िटिव—संगठन, धैर्य, व्यावहारिकता;
            नेगेटिव—कठोरता, बदलाव से इनकार।
            सफलता टिप: लचीलापन रखें और नए विचार अपनाएं।
            उपयुक्त प्रोफेशन: अभियंता, वास्तुकार, लेखाकार, प्रशासक।
            सलाह: दिनचर्या को नवाचार के साथ संतुलित करें।`
    },
    5: {
        en: `The Freedom Seeker, Adventure
            These are dynamic, adaptable, and love change.
            Positives: Versatility, curiosity, enthusiasm.
            Negatives: Restlessness, inconsistency.
            Success Tip: Learn discipline to channel your energy.
            Suitable Professions: Traveler, salesperson, writer, actor.
            Advice: Anchor your freedom with responsibility.`,
        hi: `स्वतंत्रता प्रेमी, साहसिक
            ये गतिशील, अनुकूलनीय और बदलाव पसंद करने वाले होते हैं।
            पॉज़िटिव—बहुमुखी प्रतिभा, जिज्ञासा, उत्साह;
            नेगेटिव—बेचैनी, अस्थिरता।
            सफलता टिप: अपनी ऊर्जा को सही दिशा देने के लिए अनुशासन सीखें।
            उपयुक्त प्रोफेशन: पर्यटक, विक्रेता, लेखक, अभिनेता।
            सलाह: अपनी स्वतंत्रता को जिम्मेदारी के साथ संतुलित करें।`
    },
    6: {
        en: `The Nurturer, Responsibility
            These individuals are caring, responsible, and protective.
            Positives: Compassion, loyalty, nurturing.
            Negatives: Overprotectiveness, worry.
            Success Tip: Avoid interference and trust others.
            Suitable Professions: Teacher, nurse, counselor, social worker.
            Advice: Balance care with letting go.`,
        hi: `पालनहार, जिम्मेदारी
            ऐसे व्यक्ति देखभाल करने वाले, जिम्मेदार और सुरक्षात्मक होते हैं।
            पॉज़िटिव—करुणा, निष्ठा, पालन-पोषण;
            नेगेटिव—अधिभार, चिंता।
            सफलता टिप: हस्तक्षेप से बचें और दूसरों पर विश्वास करें।
            उपयुक्त प्रोफेशन: शिक्षक, नर्स, सलाहकार, सामाजिक कार्यकर्ता।
            सलाह: देखभाल को छोड़ने के साथ संतुलित करें।`
    },
    7: {
        en: `The Seeker, Introspection
            These are analytical, spiritual, and introspective.
            Positives: Wisdom, intuition, research skills.
            Negatives: Isolation, skepticism.
            Success Tip: Engage with others to share insights.
            Suitable Professions: Scientist, philosopher, researcher, analyst.
            Advice: Balance solitude with social interaction.`,
        hi: `खोजकर्ता, आत्मचिंतन
            ये विश्लेषणात्मक, आध्यात्मिक और आत्मनिरीक्षण करने वाले होते हैं।
            पॉज़िटिव—बुद्धिमत्ता, अंतर्ज्ञान, अनुसंधान कौशल;
            नेगेटिव—एकांतप्रियता, संदेह।
            सफलता टिप: अपने विचार साझा करने के लिए दूसरों से जुड़ें।
            उपयुक्त प्रोफेशन: वैज्ञानिक, दार्शनिक, शोधकर्ता, विश्लेषक।
            सलाह: एकांत और सामाजिक संपर्क को संतुलित करें।`
    },
    8: {
        en: `The Powerhouse, Ambition
            These individuals are goal-oriented, authoritative, and efficient.
            Positives: Leadership, financial acumen, organization.
            Negatives: Domineering, workaholic tendencies.
            Success Tip: Share power and delegate responsibilities.
            Suitable Professions: CEO, banker, politician, executive.
            Advice: Balance ambition with empathy.`,
        hi: `शक्ति संपन्न, महत्वाकांक्षा
            ऐसे लोग लक्ष्य केन्द्रित, प्राधिकारिक और कुशल होते हैं।
            पॉज़िटिव—नेतृत्व, वित्तीय बुद्धिमत्ता, संगठन;
            नेगेटिव—तानाशाही प्रवृत्ति, काम के प्रति अत्यधिक लगाव।
            सफलता टिप: शक्ति साझा करें और जिम्मेदारी सौंपें।
            उपयुक्त प्रोफेशन: सीईओ, बैंकर, Politiker, कार्यकारी।
            सलाह: महत्वाकांक्षा को सहानुभूति के साथ संतुलित करें।`
    },
    9: {
        en: `The Humanitarian, Compassion
            These are idealistic, generous, and selfless.
            Positives: Compassion, creativity, global awareness.
            Negatives: Over-idealism, mood swings.
            Success Tip: Stay grounded and focus your energy.
            Suitable Professions: Artist, activist, teacher, healer.
            Advice: Practice self-care while helping others.`,
        hi: `मानवतावादी, सहानुभूति
            ये आदर्शवादी, उदार और निःस्वार्थ होते हैं।
            पॉज़िटिव—सहानुभूति, रचनात्मकता, वैश्विक जागरूकता;
            नेगेटिव—अत्यधिक आदर्शवाद, मूड स्विंग।
            सफलता टिप: व्यावहारिक बनें और अपनी ऊर्जा केंद्रित करें।
            उपयुक्त प्रोफेशन: कलाकार, कार्यकर्ता, शिक्षक, चिकित्सक।
            सलाह: दूसरों की मदद करते हुए आत्म-देखभाल करें।`
    }
};

const soulUrgeData = {
    1: {
        en: `Desire for Independence
            These souls yearn for autonomy, leadership, and creating a unique identity.
            Positives: Determination, motivation, courage.
            Negatives: Self-centeredness, impatience.
            Success Tip: Practice patience and consider others’ needs.
            Advice: Channel your drive towards constructive goals.`,
        hi: `स्वतंत्रता की इच्छा
            ऐसी आत्माएँ स्वायत्तता, नेतृत्व और एक अद्वितीय पहचान बनाने की चाहती हैं।
            पॉज़िटिव—दृढ़ता, प्रेरणा, साहस;
            नेगेटिव—स्व-केंद्रितता, अधीरता।
            सफलता टिप: धैर्य का अभ्यास करें और दूसरों की जरूरतों पर ध्यान दें।
            सलाह: अपनी ऊर्जा रचनात्मक लक्ष्यों में लगाएं।`
    },
    2: {
        en: `Desire for Harmony
            These souls seek peace, relationships, and emotional connection.
            Positives: Diplomacy, compassion, sensitivity.
            Negatives: Hesitation, fear of conflict.
            Success Tip: Build self-confidence and express feelings.
            Advice: Balance your needs with those of others.`,
        hi: `सामंजस्य की लालसा
            ये आत्माएँ शांति, रिश्ते और भावनात्मक जुड़ाव चाहती हैं।
            पॉज़िटिव—कूटनीति, करुणा, संवेदनशीलता;
            नेगेटिव—हिचकिचाहट, संघर्ष का भय।
            सफलता टिप: आत्मविश्वास बनाएं और भावनाओं को व्यक्त करें।
            सलाह: अपनी और दूसरों की जरूरतों में संतुलन रखें।`
    },
    3: {
        en: `Desire for Expression
            These souls wish to express creativity, joy, and social engagement.
            Positives: Optimism, imagination, social skills.
            Negatives: Superficiality, distraction.
            Success Tip: Focus on meaningful creative endeavors.
            Advice: Use your talents to inspire others.`,
        hi: `अभिव्यक्ति की चाह
            ये आत्माएँ रचनात्मकता, आनंद और सामाजिक जुड़ाव व्यक्त करना चाहती हैं।
            पॉज़िटिव—आशावाद, कल्पना, सामाजिक कौशल;
            नेगेटिव—सतहीपन, ध्यान भटकना।
            सफलता टिप: सार्थक रचनात्मक कार्यों पर ध्यान केंद्रित करें।
            सलाह: अपनी प्रतिभा से दूसरों को प्रेरित करें।`
    },
    4: {
        en: `Desire for Stability
            These souls desire structure, security, and dependability.
            Positives: Discipline, responsibility, practicality.
            Negatives: Rigidity, resistance to change.
            Success Tip: Remain open to new experiences.
            Advice: Build a stable yet flexible foundation.`,
        hi: `स्थिरता की चाह
            ऐसी आत्माएँ संरचना, सुरक्षा और विश्वसनीयता चाहती हैं।
            पॉज़िटिव—अनुशासन, जिम्मेदारी, व्यावहारिकता;
            नेगेटिव—कठोरता, बदलाव से इनकार।
            सफलता टिप: नए अनुभवों के लिए खुले रहें।
            सलाह: एक स्थिर लेकिन लचीला आधार बनाएं।`
    },
    5: {
        en: `Desire for Freedom
            These souls crave variety, adventure, and personal freedom.
            Positives: Flexibility, enthusiasm, curiosity.
            Negatives: Restlessness, inconsistency.
            Success Tip: Develop focus amid change.
            Advice: Enjoy freedom with responsibility.`,
        hi: `स्वतंत्रता की लालसा
            ये आत्माएँ विविधता, साहसिकता और व्यक्तिगत स्वतंत्रता चाहती हैं।
            पॉज़िटिव—लचीलापन, उत्साह, जिज्ञासा;
            नेगेटिव—बेचैनी, अस्थिरता।
            सफलता टिप: बदलाव के बीच ध्यान केंद्रित करें।
            सलाह: जिम्मेदारी के साथ स्वतंत्रता का आनंद लें।`
    },
    6: {
        en: `Desire for Service
            These souls have a strong urge to care, nurture, and support others.
            Positives: Compassion, loyalty, responsibility.
            Negatives: Over-involvement, worry.
            Success Tip: Learn to set healthy boundaries.
            Advice: Care for others without losing yourself.`,
        hi: `सेवा की लालसा
            ऐसी आत्माएँ दूसरों की देखभाल, पोषण और समर्थन करना चाहती हैं।
            पॉज़िटिव—करुणा, निष्ठा, जिम्मेदारी;
            नेगेटिव—अत्यधिक संलग्नता, चिंता।
            सफलता टिप: स्वस्थ सीमाएं बनाना सीखें।
            सलाह: खुद को खोए बिना दूसरों की देखभाल करें।`
    },
    7: {
        en: `Desire for Knowledge
            These souls seek wisdom, truth, and spiritual understanding.
            Positives: Intuition, analysis, introspection.
            Negatives: Isolation, skepticism.
            Success Tip: Balance study with social life.
            Advice: Share your insights with others.`,
        hi: `ज्ञान की लालसा
            ये आत्माएँ बुद्धिमत्ता, सत्य और आध्यात्मिक समझ खोजती हैं।
            पॉज़िटिव—अंतर्ज्ञान, विश्लेषण, आत्मनिरीक्षण;
            नेगेटिव—एकांतप्रियता, संदेह।
            सफलता टिप: अध्ययन और सामाजिक जीवन को संतुलित करें।
            सलाह: अपने विचार दूसरों के साथ साझा करें।`
    },
    8: {
        en: `Desire for Power
            These souls seek success, authority, and material achievement.
            Positives: Ambition, organization, leadership.
            Negatives: Domination, workaholism.
            Success Tip: Exercise power with compassion.
            Advice: Share your success generously.`,
        hi: `शक्ति की लालसा
            ऐसी आत्माएँ सफलता, अधिकार और भौतिक उपलब्धि चाहती हैं।
            पॉज़िटिव—महत्वाकांक्षा, संगठन, नेतृत्व;
            नेगेटिव—दमनकारी, काम में अत्यधिक लगाव।
            सफलता टिप: सहानुभूति के साथ शक्ति का प्रयोग करें।
            सलाह: अपनी सफलता उदारता से साझा करें।`
    },
    9: {
        en: `Desire for Compassion
            These souls are driven by idealism, generosity, and humanitarianism.
            Positives: Empathy, creativity, global consciousness.
            Negatives: Over-sensitivity, mood swings.
            Success Tip: Ground ideals into practical actions.
            Advice: Practice self-care alongside helping others.`,
        hi: `करुणा की लालसा
            ये आत्माएँ आदर्शवाद, उदारता और मानवता से प्रेरित होती हैं।
            पॉज़िटिव—सहानुभूति, रचनात्मकता, वैश्विक जागरूकता;
            नेगेटिव—अत्यधिक संवेदनशीलता, मूड स्विंग।
            सफलता टिप: आदर्शों को व्यावहारिक कार्यों में बदलें।
            सलाह: दूसरों की मदद करते हुए आत्म-देखभाल करें।`
    },
    default: { en: `No prediction found.`, hi: `कोई भविष्यवाणी उपलब्ध नहीं।` }
};

const expressionData = {
    1: {
        en: `Self-Expression and Leadership
            These individuals express themselves confidently and naturally take charge.
            Positives: Innovation, assertiveness, creativity.
            Negatives: Dominating, impatience.
            Success Tip: Balance confidence with listening.
            Suitable Professions: Leader, innovator, artist, executive.
            Advice: Let your creativity inspire others.`,
        hi: `आत्म-अभिव्यक्ति और नेतृत्व
            ऐसे व्यक्ति आत्मविश्वास से खुद को व्यक्त करते हैं और स्वाभाविक रूप से नेतृत्व करते हैं।
            पॉज़िटिव—नवाचार, आत्मविश्वास, रचनात्मकता;
            नेगेटिव—वश में करने की प्रवृत्ति, अधीरता।
            सफलता टिप: आत्मविश्वास और सुनने के बीच संतुलन बनाएं।
            उपयुक्त प्रोफेशन: नेता, नवप्रवर्तनकर्ता, कलाकार, कार्यकारी।
            सलाह: अपनी रचनात्मकता से दूसरों को प्रेरित करें।`
    },
    2: {
        en: `Diplomacy and Cooperation
            These individuals express themselves through tact, partnership, and empathy.
            Positives: Harmony, sensitivity, teamwork.
            Negatives: Over-sensitivity, reluctance to speak up.
            Success Tip: Voice your opinions confidently.
            Suitable Professions: Mediator, counselor, artist, diplomat.
            Advice: Use your sensitivity as a strength.`,
        hi: `कूटनीति और सहयोग
            ये व्यक्ति चालाकी, साझेदारी और सहानुभूति के माध्यम से अपने आप को व्यक्त करते हैं।
            पॉज़िटिव—सहमति, संवेदनशीलता, टीम वर्क;
            नेगेटिव—अत्यधिक संवेदनशीलता, अपनी बात रखने में संकोच।
            सफलता टिप: आत्मविश्वास से अपनी राय व्यक्त करें।
            उपयुक्त प्रोफेशन: मध्यस्थ, सलाहकार, कलाकार, राजनयिक।
            सलाह: अपनी संवेदनशीलता को अपनी ताकत बनाएं।`
    },
    3: {
        en: `Creativity and Enthusiasm
            These individuals express joy, creativity, and communicate effectively.
            Positives: Optimism, artistic talents, social skills.
            Negatives: Scattered focus, superficial interests.
            Success Tip: Concentrate on meaningful expression.
            Suitable Professions: Performer, writer, teacher, marketer.
            Advice: Bring depth to your communication.`,
        hi: `रचनात्मकता और उत्साह
            ये व्यक्ति आनंद, रचनात्मकता और प्रभावी संचार व्यक्त करते हैं।
            पॉज़िटिव—आशावाद, कलात्मक प्रतिभा, सामाजिक कौशल;
            नेगेटिव—ध्यान का बिखराव, सतही रुचि।
            सफलता टिप: सार्थक अभिव्यक्ति पर ध्यान केंद्रित करें।
            उपयुक्त प्रोफेशन: कलाकार, लेखक, शिक्षक, विपत्रक।
            सलाह: अपनी संवाद में गहराई लाएं।`
    },
    4: {
        en: `Structure and Discipline
            These individuals express themselves with practicality, order, and persistence.
            Positives: Reliability, efficiency, focus.
            Negatives: Rigidity, resistance to change.
            Success Tip: Embrace flexibility within your structure.
            Suitable Professions: Engineer, architect, accountant, planner.
            Advice: Build your expression on strong foundations.`,
        hi: `संरचना और अनुशासन
            ऐसे व्यक्ति व्यावहारिकता, व्यवस्था और दृढ़ता के साथ खुद को व्यक्त करते हैं।
            पॉज़िटिव—विश्वसनीयता, कुशलता, फोकस;
            नेगेटिव—कठोरता, बदलाव के प्रति विरोध।
            सफलता टिप: अपनी संरचना में लचीलापन अपनाएं।
            उपयुक्त प्रोफेशन: अभियंता, वास्तुकार, लेखाकार, योजनाकार।
            सलाह: अपनी अभिव्यक्ति को मजबूत आधार पर बनाएं।`
    },
    5: {
        en: `Adventure and Freedom
            These individuals express themselves through change, excitement, and versatility.
            Positives: Adaptability, charisma, enthusiasm.
            Negatives: Inconsistency, impulsiveness.
            Success Tip: Ground your energy into purposeful action.
            Suitable Professions: Salesperson, traveler, performer, writer.
            Advice: Balance freedom with commitment.`,
        hi: `साहसिकता और स्वतंत्रता
            ये व्यक्ति बदलाव, रोमांच और बहुमुखी प्रतिभा से खुद को व्यक्त करते हैं।
            पॉज़िटिव—अनुकूलनशीलता, आकर्षण, उत्साह;
            नेगेटिव—अस्थिरता, आवेगशीलता।
            सफलता टिप: अपनी ऊर्जा को लक्ष्यपूर्ण कार्य में लगाएं।
            उपयुक्त प्रोफेशन: विक्रेता, यात्री, कलाकार, लेखक।
            सलाह: स्वतंत्रता और प्रतिबद्धता में संतुलन रखें।`
    },
    6: {
        en: `Compassion and Responsibility
            These individuals express care, harmony, and devotion to family and community.
            Positives: Nurturing, loyalty, service.
            Negatives: Over-involvement, worry.
            Success Tip: Practice detachment and self-care.
            Suitable Professions: Caregiver, teacher, counselor, healer.
            Advice: Serve others without losing yourself.`,
        hi: `करुणा और जिम्मेदारी
            ऐसे व्यक्ति देखभाल, सामंजस्य और परिवार व समुदाय के प्रति समर्पण व्यक्त करते हैं।
            पॉज़िटिव—पालन-पोषण, निष्ठा, सेवा;
            नेगेटिव—अत्यधिक संलग्नता, चिंता।
            सफलता टिप: अलगाव और आत्म-देखभाल का अभ्यास करें।
            उपयुक्त प्रोफेशन: देखभालकर्ता, शिक्षक, सलाहकार, चिकित्सक।
            सलाह: खुद को खोए बिना दूसरों की सेवा करें।`
    },
    7: {
        en: `Thoughtfulness and Spirituality
            These individuals express themselves through introspection, wisdom, and analysis.
            Positives: Intuition, research aptitude, calmness.
            Negatives: Reserved nature, skepticism.
            Success Tip: Open up socially while maintaining depth.
            Suitable Professions: Researcher, philosopher, analyst, teacher.
            Advice: Share your inner knowing with others.`,
        hi: `सोच-विचार और आध्यात्मिकता
            ये व्यक्ति आत्मनिरीक्षण, बुद्धिमत्ता और विश्लेषण के माध्यम से खुद को व्यक्त करते हैं।
            पॉज़िटिव—अंतर्ज्ञान, अनुसंधान योग्यता, शांति;
            नेगेटिव—संकोची स्वभाव, संदेह।
            सफलता टिप: गहराई बनाए रखते हुए सामाजिक रूप से खुले रहें।
            उपयुक्त प्रोफेशन: शोधकर्ता, दार्शनिक, विश्लेषक, शिक्षक।
            सलाह: अपनी अंदर की समझ दूसरों के साथ साझा करें।`
    },
    8: {
        en: `Ambition and Authority
            These individuals express power, organization, and material success.
            Positives: Leadership, decisiveness, efficiency.
            Negatives: Controlling nature, workaholism.
            Success Tip: Exercise authority with compassion.
            Suitable Professions: Executive, entrepreneur, banker, politician.
            Advice: Lead with both strength and kindness.`,
        hi: `महत्वाकांक्षा और अधिकार
            ऐसे व्यक्ति शक्ति, संगठन और भौतिक सफलता को व्यक्त करते हैं।
            पॉज़िटिव—नेतृत्व, निर्णायकता, कुशलता;
            नेगेटिव—नियंत्रण करने की प्रवृत्ति, काम में अत्यधिक लगाव।
            सफलता टिप: सहानुभूति के साथ अधिकार का प्रयोग करें।
            उपयुक्त प्रोफेशन: कार्यकारी, उद्यमी, बैंकर, राजनेता।
            सलाह: ताकत और दया दोनों के साथ नेतृत्व करें।`
    },
    9: {
        en: `Compassion and Universalism
            These individuals express idealism, creativity, and humanitarian values.
            Positives: Generosity, empathy, artistic vision.
            Negatives: Over-sensitivity, moodiness.
            Success Tip: Balance ideals with practical efforts.
            Suitable Professions: Artist, activist, teacher, healer.
            Advice: Inspire others by your example.`,
        hi: `करुणा और वैश्विकता
            ये व्यक्ति आदर्शवाद, रचनात्मकता और मानवीय मूल्यों को व्यक्त करते हैं।
            पॉज़िटिव—उदारता, सहानुभूति, कलात्मक दृष्टिकोण;
            नेगेटिव—अत्यधिक संवेदनशीलता, मूडीनेस।
            सफलता टिप: आदर्शों और व्यावहारिक प्रयासों में संतुलन रखें।
            उपयुक्त प्रोफेशन: कलाकार, कार्यकर्ता, शिक्षक, चिकित्सक।
            सलाह: अपने उदाहरण से दूसरों को प्रेरित करें।`
    }
};

const comboPredictions = {
    "1-1": {
        hi: "आगे राजा, पीछे राजा — यह संयोजन अत्यंत शक्तिशाली और सफलता देने वाला है। ऐसे लोग जन्मजात लीडर होते हैं और किसी भी क्षेत्र में ऊँचाई तक पहुँच सकते हैं—चाहे बिज़नेस, प्रशासन, सेना, या नेतृत्व हो। इनका भाग्य मज़बूत होता है और ये जोखिम लेने से नहीं डरते, लेकिन घमंड और जिद इन्हें गिरा भी सकती है। सफलता जन्म की परिस्थितियों के अनुसार अलग-अलग स्तर की हो सकती है—गरीब घर में जन्मा व्यक्ति भी अपनी मेहनत से ऊँचाई छूता है और संपन्न घर में पैदा हुआ व्यक्ति साम्राज्य को और बढ़ा सकता है। उपयुक्त प्रोफेशन: बिज़नेस ओनर, उच्च प्रशासनिक पद, सेना/पुलिस अधिकारी, बड़े प्रोजेक्ट मैनेजर। सावधानी: अहंकार से बचें और टीमवर्क अपनाएँ।",
        en: "King forward, King back — This combination is extremely powerful and success-giving. Such people are born leaders and can reach great heights in any field—be it business, administration, military, or leadership. Their fortune is strong, and they are not afraid to take risks, but pride and stubbornness can bring them down. Success may vary depending on birth circumstances—a person born in a poor family can rise high through hard work, and someone from a wealthy family can further expand the empire. Suitable professions: Business owner, high administrative positions, army/police officer, large project manager. Caution: Avoid arrogance and embrace teamwork."
    },
    "1-2": {
        hi: "आगे राजा, पीछे रानी — यह संयोजन सौम्यता और नेतृत्व का संतुलन देता है। सफलता के लिए इनका सबसे अच्छा रास्ता है नंबर 2 के तत्वों वाले क्षेत्रों में काम करना—दूध, पानी, मिठाई, बेकरी, चॉकलेट, डेयरी, फिशरीज, नेवी, शिपिंग, काउंसलिंग, हीलिंग, और कंटेंट क्रिएशन। ये लोग भावुक होते हैं और दूसरों की भावनाओं को समझने में माहिर होते हैं, जिससे ये डॉक्टर या काउंसलर के रूप में भी सफल होते हैं। पॉज़िटिव पहलू—लोगों के साथ जुड़ने और भरोसा जीतने की क्षमता; नेगेटिव—ज़्यादा भावुक होकर निर्णय लेना। उपयुक्त प्रोफेशन: डेयरी/फूड बिज़नेस, डॉक्टर, काउंसलर, हीलिंग थेरेपी, मरीन बिज़नेस, सोशल मीडिया कंटेंट क्रिएटर। सावधानी: भावनाओं में बहकर बड़े फैसले न लें।",
        en: "King forward, Queen back — This combination brings a balance of gentleness and leadership. Their best path to success is to work in fields connected to the elements of number 2—milk, water, sweets, bakery, chocolate, dairy, fisheries, navy, shipping, counselling, healing, and content creation. They are emotional and excel at understanding others’ feelings, which also makes them successful as doctors or counsellors. Positive: Ability to connect with people and earn trust. Negative: Making decisions too emotionally. Suitable professions: Dairy/food business, doctor, counsellor, healing therapist, marine business, social media content creator. Caution: Do not take major decisions under the influence of emotions."
    },
    "1-3": {
        hi: "आगे राजा, पीछे गुरु — यह ज्ञान, शिक्षा और नेतृत्व का मिश्रण है। ऐसे लोग जीवन भर सीखने और सिखाने में विश्वास रखते हैं, और टीचिंग, ट्रेनिंग, रिसर्च, लीगल, स्टेशनरी, मेडिकल शॉप, ऑकल्ट साइंस, और शेयर मार्केट एजुकेशन में बहुत सफल हो सकते हैं। इनकी बातों में ठसक और आत्मविश्वास होता है, जिससे ये भीड़ में अलग दिखते हैं। पॉज़िटिव—उत्कृष्ट ज्ञान और समझ; नेगेटिव—कभी-कभी ओवर-कॉन्फिडेंस। उपयुक्त प्रोफेशन: टीचर, ट्रेनर, वकील, रिसर्चर, ऑकल्ट एक्सपर्ट, शेयर मार्केट ट्रेनर। सावधानी: ज्ञान को दिखावे के बजाय विनम्रता के साथ बाँटें।",
        en: "King forward, Teacher back — This is a blend of knowledge, education, and leadership. Such people believe in lifelong learning and teaching, and can succeed greatly in teaching, training, research, legal work, stationery, medical shops, occult sciences, and stock market education. Their speech carries authority and confidence, making them stand out in a crowd. Positive: Excellent knowledge and understanding. Negative: Sometimes overconfidence. Suitable professions: Teacher, trainer, lawyer, researcher, occult expert, stock market trainer. Caution: Share your knowledge with humility rather than show-off."
    },
    "1-4": {
        hi: "आगे राजा, पीछे राहु (सूर्य ग्रहण योग) — मेहनत बहुत, सफलता अपेक्षाकृत धीमी लेकिन सही दिशा मिलने पर ये लोग शानदार ऊँचाई तक पहुँच सकते हैं। सूर्य (1) और राहु (4) का मेल इन्हें राजनीति, नेतृत्व और रणनीति में अच्छा बना सकता है। पॉज़िटिव—अनूठी सोच और कठिन हालात में भी टिके रहना; नेगेटिव—बार-बार रुकावटें, अचानक समस्याएँ, या गलत लोगों के प्रभाव में आना। उपयुक्त प्रोफेशन: पॉलिटिक्स, लीडरशिप रोल्स, डॉक्टर, एडमिनिस्ट्रेशन, कंसल्टेंसी। सावधानी: गलत शॉर्टकट से बचें, लालच में आकर गलत काम न करें।",
        en: "King forward, Rahu back (Solar Eclipse Yoga) — Hard work is plenty, success is relatively slow, but with the right direction, these people can reach great heights. The combination of Sun (1) and Rahu (4) can make them good at politics, leadership, and strategy. Positive: Unique thinking and resilience in difficult situations. Negative: Frequent obstacles, sudden problems, or falling under the influence of wrong people. Suitable professions: Politics, leadership roles, doctor, administration, consultancy. Caution: Avoid wrong shortcuts and do not be lured into unethical actions."
    },
    "1-5": {
        hi: "आगे राजा, पीछे बुध (पारस मणि योग) — यह बेहद शुभ और सफलता देने वाला कॉम्बिनेशन है। ऐसे लोग हर क्षेत्र में चमकते हैं—खासकर फाइनेंस, बैंकिंग, मार्केटिंग, मीडिया, सेल्स, और पब्लिक रिलेशन में। इनकी वाणी में मिठास और समझदारी होती है, जिससे लोग इनकी ओर खिंचे चले आते हैं। पॉज़िटिव—तेज़ दिमाग, कम्युनिकेशन स्किल्स, और परिस्थितियों में जल्दी ढलने की क्षमता; नेगेटिव—कभी-कभी अधीरता या काम जल्दी बदलना। उपयुक्त प्रोफेशन: फाइनेंस कंसल्टेंट, बैंकिंग, मीडिया/PR, पब्लिक स्पीकर, मार्केटिंग, सेल्स। सावधानी: फोकस बनाए रखें और जल्दी-जल्दी क्षेत्र न बदलें।",
        en: "King forward, Mercury back (Paras Mani Yoga) — This is a very auspicious and success-giving combination. Such people shine in every field—especially in finance, banking, marketing, media, sales, and public relations. Their speech carries sweetness and intelligence, attracting people towards them. Positive: Sharp mind, communication skills, and adaptability. Negative: Sometimes impatience or frequent changes in work. Suitable professions: Finance consultant, banking, media/PR, public speaker, marketing, sales. Caution: Maintain focus and avoid changing fields too often."
    },

    "1-6": {
        hi: "आगे राजा, पीछे शुक्र — यह संयोजन नेतृत्व और सौंदर्य, रचनात्मकता, तथा भौतिक सुख-सुविधाओं का मेल है। ऐसे लोग आकर्षक व्यक्तित्व और कलात्मक सोच रखते हैं, जिससे लोग आसानी से इनके प्रभाव में आते हैं। पॉज़िटिव—संगठन क्षमता और सुंदर चीज़ों के प्रति रुझान; नेगेटिव—कभी-कभी विलासिता और दिखावे में अति। सफलता के लिए इन्हें अपने नैतिक मूल्यों को बनाए रखना जरूरी है। उपयुक्त प्रोफेशन: फैशन, डिज़ाइन, आर्किटेक्चर, होटल-रेस्टोरेंट, लग्ज़री प्रोडक्ट बिज़नेस, इवेंट मैनेजमेंट, आर्ट/म्यूजिक। सावधानी: खर्च पर नियंत्रण रखें और रिश्तों में वफ़ादारी बनाए रखें।",
        en: "King forward, Venus back — This combination blends leadership with beauty, creativity, and material comforts. Such people have an attractive personality and artistic thinking, easily influencing others. Positive: Organizational ability and appreciation for beautiful things. Negative: Sometimes excessive indulgence in luxury and show-off. For success, they must uphold their moral values. Suitable professions: Fashion, design, architecture, hotel/restaurant business, luxury products, event management, art/music. Caution: Control expenses and maintain loyalty in relationships."
    },
    "1-7": {
        hi: "आगे राजा, पीछे केतु — यह संयोजन नेतृत्व और आध्यात्मिकता का मेल है। ऐसे लोग गहरी सोच और शोध की प्रवृत्ति रखते हैं, अक्सर भीड़ से अलग अपना रास्ता चुनते हैं। पॉज़िटिव—इन्ट्यूशन (अंतर्ज्ञान) और स्वतंत्र सोच; नेगेटिव—अत्यधिक एकांतप्रियता या जिद। सफलता के लिए इन्हें अपने आइडिया को प्रैक्टिकल बनाना जरूरी है। उपयुक्त प्रोफेशन: रिसर्च, साइंटिफिक वर्क, मिस्टिसिज़्म, स्पिरिचुअल गाइड, एडवांस टेक्नोलॉजी, एडवाइजरी रोल्स। सावधानी: दुनिया से कटने की बजाय नेटवर्किंग बढ़ाएँ और विचारों को लागू करने का प्रयास करें।",
        en: "King forward, Ketu back — This combination merges leadership with spirituality. Such people possess deep thinking and research tendencies, often choosing their own path away from the crowd. Positive: Intuition and independent thinking. Negative: Excessive isolation or stubbornness. For success, they must turn their ideas into practical action. Suitable professions: Research, scientific work, mysticism, spiritual guidance, advanced technology, advisory roles. Caution: Instead of cutting off from the world, increase networking and put ideas into practice."
    },
    "1-8": {
        hi: "आगे राजा, पीछे शनि — यह संयोजन मेहनत, अनुशासन और दीर्घकालिक सफलता का प्रतीक है। शुरुआत में संघर्ष अधिक होता है, लेकिन समय के साथ बहुत मज़बूत स्थिति हासिल होती है। पॉज़िटिव—धैर्य और मेहनत करने की क्षमता; नेगेटिव—कभी-कभी जीवन में भारी देरी या अवरोध। सही रणनीति और ईमानदारी से काम करें तो बड़ी सफलता मिलती है। उपयुक्त प्रोफेशन: प्रशासनिक सेवाएँ, लॉ एंड ऑर्डर, ऑर्गनाइजेशन मैनेजमेंट, रियल एस्टेट, इंफ्रास्ट्रक्चर, मैन्युफैक्चरिंग। सावधानी: अधीरता से बचें और धैर्य बनाए रखें।",
        en: "King forward, Saturn back — This combination symbolizes hard work, discipline, and long-term success. The initial phase involves more struggle, but over time, a strong position is achieved. Positive: Patience and ability to work hard. Negative: Sometimes significant delays or obstacles in life. With the right strategy and honesty, great success is attainable. Suitable professions: Administrative services, law and order, organizational management, real estate, infrastructure, manufacturing. Caution: Avoid impatience and maintain patience."
    },

    "1-9": {
        hi: "आगे राजा, पीछे मंगल — यह संयोजन ऊर्जा, साहस और नेतृत्व का ज़बरदस्त मेल है। ऐसे लोग तेज़-तर्रार, निर्णय लेने में सक्षम और चुनौतियों से न डरने वाले होते हैं। पॉज़िटिव—जोश, हिम्मत और लोगों को प्रेरित करने की क्षमता; नेगेटिव—जल्दबाज़ी और गुस्सा। सही दिशा में इस्तेमाल करने पर ये युद्धनीति, खेल, एडवेंचर और संकट प्रबंधन में माहिर होते हैं। उपयुक्त प्रोफेशन: सेना/पुलिस, स्पोर्ट्स, एडवेंचर बिज़नेस, कंस्ट्रक्शन, सुरक्षा सेवाएँ, मोटिवेशनल स्पीकर। सावधानी: गुस्से को नियंत्रित करें और सोच-समझकर निर्णय लें।",
        en: "King forward, Mars back — This combination is a powerful blend of energy, courage, and leadership. Such people are fast-paced, decisive, and unafraid of challenges. Positive: Enthusiasm, courage, and ability to inspire others. Negative: Impulsiveness and anger. When used in the right direction, they excel in warfare strategy, sports, adventure, and crisis management. Suitable professions: Army/police, sports, adventure business, construction, security services, motivational speaking. Caution: Control anger and make well-thought-out decisions."
    },

    "2-1": {
        hi: "आगे चंद्र, पीछे सूर्य — यह संयोजन संवेदनशीलता और नेतृत्व का संतुलन है। ऐसे लोग भावनात्मक रूप से गहरे होते हैं, लेकिन ज़रूरत पड़ने पर सशक्त निर्णय लेने में सक्षम रहते हैं। पॉज़िटिव—सहानुभूति और नेतृत्व का सुंदर मेल; नेगेटिव—कभी-कभी भावनात्मक उतार-चढ़ाव या आत्म-संदेह। सफलता के लिए आत्मविश्वास और भावनाओं का सही संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: मीडिया, पब्लिक रिलेशंस, सामाजिक सेवा, शिक्षा, क्रिएटिव आर्ट्स, पॉलिटिक्स। सावधानी: भावनाओं में बहकर बड़े निर्णय न लें।",
        en: "Moon forward, Sun back — This combination balances sensitivity with leadership. Such people are emotionally deep but can take strong decisions when needed. Positive: A beautiful blend of empathy and leadership. Negative: Sometimes emotional fluctuations or self-doubt. For success, confidence and the right balance of emotions are essential. Suitable professions: Media, public relations, social service, education, creative arts, politics. Caution: Do not make major decisions while overwhelmed by emotions."
    },
    "2-2": {
        hi: "आगे चंद्र, पीछे चंद्र — यह संयोजन गहरी भावनात्मक समझ और संवेदनशीलता का प्रतीक है। ऐसे लोग रिश्तों और भावनात्मक जुड़ाव में माहिर होते हैं, लेकिन मूड स्विंग का सामना कर सकते हैं। पॉज़िटिव—दूसरों को समझने और सहारा देने की क्षमता; नेगेटिव—अत्यधिक संवेदनशीलता या निर्भरता। सफलता के लिए आत्मनिर्भरता और मानसिक मजबूती ज़रूरी है। उपयुक्त प्रोफेशन: काउंसलिंग, हीलिंग, सोशल वर्क, नर्सिंग, क्रिएटिव आर्ट्स। सावधानी: आत्मविश्वास बनाए रखें और खुद पर विश्वास रखें।",
        en: "Moon forward, Moon back — This combination represents deep emotional understanding and sensitivity. Such people excel in relationships and emotional bonding but may experience mood swings. Positive: Ability to understand and support others. Negative: Excessive sensitivity or dependence. For success, self-reliance and mental strength are essential. Suitable professions: Counselling, healing, social work, nursing, creative arts. Caution: Maintain self-confidence and trust in yourself."
    },
    "2-3": {
        hi: "आगे चंद्र, पीछे गुरु — यह संयोजन भावनाओं और ज्ञान का सुंदर संगम है। ऐसे लोग कोमल हृदय के साथ-साथ बुद्धिमत्ता और सामाजिकता भी रखते हैं। पॉज़िटिव—शिक्षा और प्रेरणा देने की क्षमता; नेगेटिव—कभी-कभी अधिक बोलना या ओवर-थिंकिंग। सफलता के लिए फोकस बनाए रखना ज़रूरी है। उपयुक्त प्रोफेशन: टीचिंग, ट्रेनिंग, लेखन, पत्रकारिता, ट्रैवल, पब्लिक स्पीकिंग। सावधानी: अनावश्यक बहस और टालमटोल से बचें।",
        en: "Moon forward, Guru back — This combination is a beautiful blend of emotions and knowledge. Such people have a gentle heart along with intelligence and sociability. Positive: Ability to educate and inspire. Negative: Sometimes excessive talking or overthinking. For success, focus must be maintained. Suitable professions: Teaching, training, writing, journalism, travel, public speaking. Caution: Avoid unnecessary debates and procrastination."
    },
    "2-4": {
        hi: "आगे चंद्र, पीछे राहु — यह संयोजन भावनात्मकता और योजना-बद्ध कार्य का मेल है, लेकिन कभी-कभी भ्रम और दिशा-भटकाव ला सकता है। पॉज़िटिव—नई सोच और परिस्थितियों के हिसाब से खुद को ढालने की क्षमता; नेगेटिव—कभी-कभी भ्रम या अनिश्चितता। सफलता के लिए स्पष्ट लक्ष्य और धरातल से जुड़े रहना ज़रूरी है। उपयुक्त प्रोफेशन: टेक्नोलॉजी, रिसर्च, मार्केटिंग, इवेंट मैनेजमेंट, मीडिया। सावधानी: स्थिरता बनाए रखें और निर्णय लेने में जल्दबाज़ी न करें।",
        en: "Moon forward, Rahu back — This combination mixes emotionality with planned action, but may sometimes bring confusion or misdirection. Positive: New ideas and adaptability to circumstances. Negative: Sometimes confusion or uncertainty. For success, clear goals and staying grounded are necessary. Suitable professions: Technology, research, marketing, event management, media. Caution: Maintain stability and avoid hasty decisions."
    },
    "2-5": {
        hi: "आगे चंद्र, पीछे बुध — यह संयोजन भावनाओं और बुद्धि का लचीला मेल है। ऐसे लोग बातचीत और नेटवर्किंग में माहिर होते हैं, और आसानी से लोगों को जोड़ सकते हैं। पॉज़िटिव—कूटनीति और त्वरित निर्णय लेने की क्षमता; नेगेटिव—कभी-कभी अस्थिरता या बदलते मूड। सफलता के लिए एक दिशा में लगातार प्रयास करना ज़रूरी है। उपयुक्त प्रोफेशन: पब्लिक रिलेशंस, मार्केटिंग, सेल्स, मीडिया, एजुकेशन, टूरिज्म। सावधानी: निरंतरता बनाए रखें और वादों को पूरा करें।",
        en: "Moon forward, Mercury back — This combination is a flexible blend of emotions and intelligence. Such people excel in conversation and networking, easily connecting people. Positive: Diplomacy and quick decision-making ability. Negative: Sometimes instability or changing moods. For success, consistent effort in one direction is necessary. Suitable professions: Public relations, marketing, sales, media, education, tourism. Caution: Maintain consistency and fulfill promises."
    },
    "2-6": {
        hi: "आगे चंद्र, पीछे शुक्र — यह संयोजन भावनाओं और सौंदर्य, रचनात्मकता का मेल है। ऐसे लोग रिश्तों को महत्व देते हैं और सुंदरता, कला तथा विलासिता से जुड़े कामों में माहिर होते हैं। पॉज़िटिव—सहानुभूति और कलात्मक दृष्टि; नेगेटिव—कभी-कभी भावनात्मक निर्भरता या विलासिता में अति। सफलता के लिए आत्मनिर्भरता और अनुशासन ज़रूरी है। उपयुक्त प्रोफेशन: फैशन, इंटीरियर डिज़ाइन, आर्ट, म्यूजिक, होटल इंडस्ट्री, इवेंट मैनेजमेंट। सावधानी: भावनाओं और खर्च पर नियंत्रण रखें।",
        en: "Moon forward, Venus back — This combination merges emotions with beauty and creativity. Such people value relationships and excel in work related to beauty, art, and luxury. Positive: Empathy and artistic vision. Negative: Sometimes emotional dependence or excess in luxury. For success, self-reliance and discipline are necessary. Suitable professions: Fashion, interior design, art, music, hotel industry, event management. Caution: Control emotions and expenses."
    },
    "2-7": {
        hi: "आगे चंद्र, पीछे केतु — यह संयोजन भावनात्मक गहराई और आध्यात्मिकता का प्रतीक है। ऐसे लोग रहस्यमयी व्यक्तित्व के होते हैं और अंतर्ज्ञान से निर्णय लेते हैं। पॉज़िटिव—आध्यात्मिक समझ और गहरी सोच; नेगेटिव—अत्यधिक एकांतप्रियता या अव्यावहारिक सोच। सफलता के लिए संतुलन और व्यवहारिकता ज़रूरी है। उपयुक्त प्रोफेशन: योग, ध्यान, हीलिंग, रिसर्च, ज्योतिष, मनोविज्ञान। सावधानी: दुनिया से कटने की बजाय संबंध बनाए रखें।",
        en: "Moon forward, Ketu back — This combination represents emotional depth and spirituality. Such people have a mysterious personality and make decisions based on intuition. Positive: Spiritual understanding and deep thinking. Negative: Excessive isolation or impractical thinking. For success, balance and practicality are essential. Suitable professions: Yoga, meditation, healing, research, astrology, psychology. Caution: Instead of cutting off from the world, maintain relationships."
    },
    "2-8": {
        hi: "आगे चंद्र, पीछे शनि — यह संयोजन भावनाओं और अनुशासन का मेल है। ऐसे लोग मेहनती, जिम्मेदार और स्थिर करियर बनाने वाले होते हैं, लेकिन कभी-कभी भावनात्मक दबाव झेलते हैं। पॉज़िटिव—धैर्य और संगठन क्षमता; नेगेटिव—अत्यधिक गंभीरता या निराशा। सफलता के लिए मानसिक मजबूती और धैर्य ज़रूरी है। उपयुक्त प्रोफेशन: प्रशासन, मैनेजमेंट, वित्त, कानून, शिक्षा, सामाजिक सेवा। सावधानी: नकारात्मक सोच से बचें और संतुलन बनाए रखें।",
        en: "Moon forward, Saturn back — This combination merges emotions with discipline. Such people are hardworking, responsible, and build stable careers, but may sometimes face emotional pressure. Positive: Patience and organizational skills. Negative: Excessive seriousness or pessimism. For success, mental strength and patience are required. Suitable professions: Administration, management, finance, law, education, social service. Caution: Avoid negative thinking and maintain balance."
    },
    "2-9": {
        hi: "आगे चंद्र, पीछे मंगल — यह संयोजन भावनाओं और ऊर्जा का गतिशील मेल है। ऐसे लोग संवेदनशील होते हुए भी बहादुर और निर्णायक होते हैं। पॉज़िटिव—सहानुभूति के साथ साहस; नेगेटिव—गुस्सा या जल्दबाज़ी। सफलता के लिए संयम और धैर्य ज़रूरी है। उपयुक्त प्रोफेशन: पुलिस, सेना, सामाजिक सेवा, खेल, एडवेंचर टूरिज्म, संकट प्रबंधन। सावधानी: भावनाओं में आकर निर्णय न लें और गुस्से पर काबू रखें।",
        en: "Moon forward, Mars back — This combination is a dynamic mix of emotions and energy. Such people are sensitive yet brave and decisive. Positive: Courage with empathy. Negative: Anger or impatience. For success, restraint and patience are necessary. Suitable professions: Police, army, social service, sports, adventure tourism, crisis management. Caution: Do not make decisions under emotional influence and control anger."
    },

    "3-1": {
        hi: "आगे गुरु, पीछे सूर्य — यह संयोजन ज्ञान और नेतृत्व का मेल है। ऐसे लोग शिक्षा, मार्गदर्शन और निर्णायक कार्यों में माहिर होते हैं। पॉज़िटिव—आदर्शवादी सोच और नेतृत्व क्षमता; नेगेटिव—कभी-कभी अहंकार या जिद। सफलता के लिए विनम्रता और टीमवर्क ज़रूरी है। उपयुक्त प्रोफेशन: शिक्षा, प्रशासन, पॉलिटिक्स, ट्रेनिंग, धार्मिक-सामाजिक नेतृत्व। सावधानी: अपनी राय थोपने से बचें और सुनने की आदत विकसित करें।",
        en: "Guru forward, Sun back — This combination blends knowledge with leadership. Such people excel in education, guidance, and decisive actions. Positive: Idealistic thinking and leadership ability. Negative: Sometimes arrogance or stubbornness. For success, humility and teamwork are essential. Suitable professions: Education, administration, politics, training, religious/social leadership. Caution: Avoid imposing your opinions and develop the habit of listening."
    },
    "3-2": {
        hi: "आगे गुरु, पीछे चंद्र — यह संयोजन बुद्धि और संवेदनशीलता का सुंदर संगम है। ऐसे लोग ज्ञानवान होने के साथ-साथ दूसरों की भावनाओं को भी समझते हैं। पॉज़िटिव—शिक्षण और प्रेरणा देने की क्षमता; नेगेटिव—कभी-कभी भावनाओं में बहकर निर्णय लेना। सफलता के लिए भावनाओं और तर्क का संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: टीचिंग, काउंसलिंग, लेखन, शिक्षा, धर्म और समाज सेवा। सावधानी: भावनात्मक फैसलों से बचें और तथ्यों पर ध्यान दें।",
        en: "Guru forward, Moon back — This combination is a beautiful union of intellect and sensitivity. Such people are knowledgeable while also understanding others’ emotions. Positive: Ability to teach and inspire. Negative: Sometimes making decisions driven by emotions. For success, balance between emotions and logic is necessary. Suitable professions: Teaching, counselling, writing, education, religion, and social service. Caution: Avoid emotional decisions and focus on facts."
    },
    "3-3": {
        hi: "आगे गुरु, पीछे गुरु — यह संयोजन शुद्ध ज्ञान और नैतिकता का प्रतीक है। ऐसे लोग शिक्षण, लेखन, शोध और मार्गदर्शन में श्रेष्ठ होते हैं। पॉज़िटिव—उच्च आदर्श और स्पष्ट सोच; नेगेटिव—कभी-कभी व्यावहारिकता की कमी। सफलता के लिए लचीलापन और आधुनिक दृष्टिकोण अपनाना ज़रूरी है। उपयुक्त प्रोफेशन: प्रोफेसर, लेखक, धर्मगुरु, कोच, एडवाइजर, फिलॉसफर। सावधानी: आदर्शों में उलझकर वास्तविकता से दूर न हों।",
        en: "Guru forward, Guru back — This combination symbolizes pure knowledge and morality. Such people excel in teaching, writing, research, and guidance. Positive: High ideals and clear thinking. Negative: Sometimes lack of practicality. For success, flexibility and adopting a modern approach are essential. Suitable professions: Professor, writer, spiritual leader, coach, advisor, philosopher. Caution: Do not get lost in ideals and detach from reality."
    },
    "3-4": {
        hi: "आगे गुरु, पीछे राहु — यह संयोजन ज्ञान के साथ रहस्यमयी और रणनीतिक सोच देता है। ऐसे लोग बड़े विज़न रखते हैं और नए रास्ते बनाने में माहिर होते हैं। पॉज़िटिव—रचनात्मक रणनीति और परिस्थितियों में अवसर ढूँढने की क्षमता; नेगेटिव—कभी-कभी भ्रम या गलत दिशा। सफलता के लिए धरातल पर टिके रहना और सत्यनिष्ठा ज़रूरी है। उपयुक्त प्रोफेशन: मार्केटिंग, रिसर्च, पॉलिटिक्स, मीडिया, एडवरटाइजिंग। सावधानी: गलत साथियों या शॉर्टकट से बचें।",
        en: "Guru forward, Rahu back — This combination adds mysterious and strategic thinking to knowledge. Such people have a big vision and are skilled at creating new paths. Positive: Creative strategy and ability to find opportunities in situations. Negative: Sometimes confusion or wrong direction. For success, staying grounded and truthful is essential. Suitable professions: Marketing, research, politics, media, advertising. Caution: Avoid wrong companions or shortcuts."
    },
    "3-5": {
        hi: "आगे गुरु, पीछे बुध — यह संयोजन बुद्धि, ज्ञान और संवाद कला का शक्तिशाली मेल है। ऐसे लोग शिक्षा, लेखन, मीडिया और ट्रेनिंग में उभरते हैं। पॉज़िटिव—स्पष्ट अभिव्यक्ति और ज्ञान बांटने की क्षमता; नेगेटिव—कभी-कभी बहुत बोलना या दूसरों पर हावी होना। सफलता के लिए सुनने की आदत और संयम ज़रूरी है। उपयुक्त प्रोफेशन: पत्रकारिता, शिक्षण, पब्लिक स्पीकिंग, ट्रेनिंग, बिज़नेस कंसल्टेंसी। सावधानी: दूसरों की राय को नज़रअंदाज़ न करें।",
        en: "Guru forward, Mercury back — This combination powerfully blends intelligence, knowledge, and communication skills. Such people thrive in education, writing, media, and training. Positive: Clear expression and ability to share knowledge. Negative: Sometimes talking too much or dominating others. For success, listening and restraint are important. Suitable professions: Journalism, teaching, public speaking, training, business consultancy. Caution: Do not ignore others’ opinions."
    },
    "3-6": {
        hi: "आगे गुरु, पीछे शुक्र — यह संयोजन ज्ञान और कला का आकर्षक मेल है। ऐसे लोग शिक्षण और रचनात्मक क्षेत्रों में बेहतरीन होते हैं। पॉज़िटिव—सौंदर्यबोध के साथ ज्ञान का प्रयोग; नेगेटिव—कभी-कभी आराम में डूबकर आलस्य। सफलता के लिए अनुशासन और लक्ष्य-केन्द्रित कार्य ज़रूरी है। उपयुक्त प्रोफेशन: कला, डिजाइन, शिक्षा, पब्लिक रिलेशंस, मीडिया, फैशन ट्रेनिंग। सावधानी: समय का सही उपयोग करें और आलस्य से बचें।",
        en: "Guru forward, Venus back — This combination is an attractive union of knowledge and art. Such people excel in teaching and creative fields. Positive: Applying knowledge with an aesthetic sense. Negative: Sometimes indulging in comfort and becoming lazy. For success, discipline and goal-focused work are essential. Suitable professions: Art, design, education, public relations, media, fashion training. Caution: Use time wisely and avoid laziness."
    },
    "3-7": {
        hi: "आगे गुरु, पीछे केतु — यह संयोजन ज्ञान और आध्यात्मिकता का गहरा मेल है। ऐसे लोग अंतर्मुखी होते हैं, लेकिन गहन सोच और रिसर्च में माहिर होते हैं। पॉज़िटिव—आध्यात्मिक समझ और खोज की प्रवृत्ति; नेगेटिव—कभी-कभी एकांतप्रियता या असामाजिकता। सफलता के लिए व्यावहारिकता और संवाद कौशल ज़रूरी है। उपयुक्त प्रोफेशन: रिसर्च, आध्यात्मिक गुरु, योग, ध्यान, मनोविज्ञान, ज्योतिष। सावधानी: लोगों से कटने की बजाय जुड़ाव बनाए रखें।",
        en: "Guru forward, Ketu back — This combination deeply blends knowledge and spirituality. Such people are introverted but excel in deep thinking and research. Positive: Spiritual understanding and an investigative nature. Negative: Sometimes isolation or unsociability. For success, practicality and communication skills are important. Suitable professions: Research, spiritual teacher, yoga, meditation, psychology, astrology. Caution: Maintain connections instead of cutting off from people."
    },
    "3-8": {
        hi: "आगे गुरु, पीछे शनि — यह संयोजन ज्ञान और अनुशासन का संगम है। ऐसे लोग मेहनती, गंभीर और दीर्घकालिक सफलता पाने वाले होते हैं। पॉज़िटिव—योजना, धैर्य और ईमानदारी; नेगेटिव—कभी-कभी कठोर स्वभाव या नकारात्मक सोच। सफलता के लिए लचीला व्यवहार और आशावाद ज़रूरी है। उपयुक्त प्रोफेशन: प्रशासन, कानून, शिक्षा, अकाउंटिंग, मैनेजमेंट। सावधानी: अत्यधिक गंभीरता और संदेह से बचें।",
        en: "Guru forward, Saturn back — This combination merges knowledge with discipline. Such people are hardworking, serious, and achieve long-term success. Positive: Planning, patience, and honesty. Negative: Sometimes a harsh nature or negative thinking. For success, flexible behavior and optimism are essential. Suitable professions: Administration, law, education, accounting, management. Caution: Avoid excessive seriousness and doubt."
    },
    "3-9": {
        hi: "आगे गुरु, पीछे मंगल — यह संयोजन ज्ञान और साहस का मेल है। ऐसे लोग समझदारी और तेज़ निर्णय क्षमता रखते हैं, और नेतृत्व में चमकते हैं। पॉज़िटिव—निर्णायक सोच और ऊर्जा; नेगेटिव—कभी-कभी जल्दबाज़ी या गुस्सा। सफलता के लिए धैर्य और संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: आर्मी, पुलिस, कोचिंग, खेल, प्रशासन, बिज़नेस लीडरशिप। सावधानी: आवेश में निर्णय लेने से बचें।",
        en: "Guru forward, Mars back — This combination blends knowledge with courage. Such people have wisdom and quick decision-making ability, shining in leadership. Positive: Decisive thinking and energy. Negative: Sometimes impulsiveness or anger. For success, patience and balance are necessary. Suitable professions: Army, police, coaching, sports, administration, business leadership. Caution: Avoid making decisions in haste."
    },

    "4-1": {
        hi: "आगे राहु, पीछे सूर्य — यह संयोजन महत्वाकांक्षा और नेतृत्व का तीखा मेल है। ऐसे लोग असाधारण योजनाएँ बनाते हैं और जोखिम लेकर भी आगे बढ़ते हैं। पॉज़िटिव—रणनीतिक सोच और ऊँचे लक्ष्यों की चाह; नेगेटिव—कभी-कभी अति-आत्मविश्वास या राजनीति में उलझना। सफलता के लिए पारदर्शिता और नैतिकता ज़रूरी है। उपयुक्त प्रोफेशन: बिज़नेस स्ट्रेटेजी, पॉलिटिक्स, इवेंट मैनेजमेंट, मार्केटिंग, बड़ी कंपनियों का प्रबंधन। सावधानी: शॉर्टकट से बचें और भरोसेमंद टीम बनाएं।",
        en: "Rahu forward, Sun back — This combination is a sharp blend of ambition and leadership. Such people create extraordinary plans and move forward even by taking risks. Positive: Strategic thinking and desire for high goals. Negative: Sometimes overconfidence or getting entangled in politics. For success, transparency and ethics are essential. Suitable professions: Business strategy, politics, event management, marketing, management of large companies. Caution: Avoid shortcuts and build a trustworthy team."
    },
    "4-2": {
        hi: "आगे राहु, पीछे चंद्र — यह संयोजन कल्पनाशक्ति और रणनीति का मेल है। ऐसे लोग नए-नए आइडिया लाकर भावनात्मक जुड़ाव से काम करवाते हैं। पॉज़िटिव—लोगों को प्रभावित करने और परिस्थितियों को अपने पक्ष में मोड़ने की क्षमता; नेगेटिव—कभी-कभी अस्थिरता या भावनात्मक कमजोरी। सफलता के लिए स्थिरता और स्पष्ट योजना ज़रूरी है। उपयुक्त प्रोफेशन: मीडिया, पब्लिक रिलेशंस, क्रिएटिव मार्केटिंग, इवेंट्स, फिल्म प्रोडक्शन। सावधानी: भावनाओं में बहकर गलत निर्णय न लें।",
        en: "Rahu forward, Moon back — This combination blends imagination with strategy. Such people bring new ideas and get work done through emotional connection. Positive: Ability to influence people and turn situations in their favor. Negative: Sometimes instability or emotional weakness. For success, stability and a clear plan are essential. Suitable professions: Media, public relations, creative marketing, events, film production. Caution: Do not make wrong decisions driven by emotions."
    },
    "4-3": {
        hi: "आगे राहु, पीछे गुरु — यह संयोजन रहस्य और ज्ञान का मिलाजुला रूप है। ऐसे लोग नई दिशा में सोचते हैं और भीड़ से अलग पहचान बनाते हैं। पॉज़िटिव—नवाचार और गहरी समझ; नेगेटिव—कभी-कभी नियमों से अलग हटकर विवादों में फँसना। सफलता के लिए पारदर्शिता और सही सलाहकार रखना ज़रूरी है। उपयुक्त प्रोफेशन: रिसर्च, टेक्नोलॉजी, मार्केट एनालिसिस, पॉलिटिक्स, एडवर्टाइजिंग। सावधानी: नैतिक सीमाएं न तोड़ें और भरोसेमंद सहयोगी रखें।",
        en: "Rahu forward, Guru back — This combination is a blend of mystery and knowledge. Such people think in new directions and create a distinct identity in the crowd. Positive: Innovation and deep understanding. Negative: Sometimes straying from rules and getting into controversies. For success, transparency and having the right advisor are important. Suitable professions: Research, technology, market analysis, politics, advertising. Caution: Do not break ethical boundaries and keep reliable partners."
    },
    "4-4": {
        hi: "आगे राहु, पीछे राहु — यह संयोजन रहस्य, महत्वाकांक्षा और योजनाओं का चरम रूप है। ऐसे लोग रणनीतिक होते हैं, पर उनकी सोच सामान्य से अलग होती है। पॉज़िटिव—अनोखा विज़न और परिस्थितियों को अपने पक्ष में मोड़ना; नेगेटिव—कभी-कभी छल-कपट या अत्यधिक जोखिम। सफलता के लिए ईमानदारी और दीर्घकालिक योजना ज़रूरी है। उपयुक्त प्रोफेशन: पॉलिटिकल स्ट्रेटेजिस्ट, बिज़नेस टाइकून, इंटेलिजेंस, हाई-लेवल मैनेजमेंट। सावधानी: गलत संगत और गैरकानूनी तरीकों से बचें।",
        en: "Rahu forward, Rahu back — This combination is the peak of mystery, ambition, and planning. Such people are strategic, but their thinking is unconventional. Positive: Unique vision and ability to turn situations in their favor. Negative: Sometimes deceit or excessive risk-taking. For success, honesty and long-term planning are necessary. Suitable professions: Political strategist, business tycoon, intelligence, high-level management. Caution: Avoid wrong company and illegal methods."
    },
    "4-5": {
        hi: "आगे राहु, पीछे बुध — यह संयोजन चतुराई, संवाद और रणनीति का मेल है। ऐसे लोग बातों से लोगों को प्रभावित करने में माहिर होते हैं। पॉज़िटिव—तेज़ दिमाग और नेटवर्किंग क्षमता; नेगेटिव—कभी-कभी चालाकी या अवसरवाद। सफलता के लिए सच्चाई और संतुलित व्यवहार ज़रूरी है। उपयुक्त प्रोफेशन: सेल्स, मार्केटिंग, पब्लिक रिलेशंस, मीडिया, एडवरटाइजिंग, स्टार्टअप्स। सावधानी: छल-कपट के चक्कर में रिश्ते खराब न करें।",
        en: "Rahu forward, Mercury back — This combination blends cleverness, communication, and strategy. Such people are skilled at influencing others through words. Positive: Sharp mind and networking ability. Negative: Sometimes cunning or opportunistic. For success, honesty and balanced behavior are essential. Suitable professions: Sales, marketing, public relations, media, advertising, startups. Caution: Do not damage relationships through deceit."
    },
    "4-6": {
        hi: "आगे राहु, पीछे शुक्र — यह संयोजन विलासिता और रणनीति का मिश्रण है। ऐसे लोग स्टाइल, कला और पब्लिक इमेज में माहिर होते हैं। पॉज़िटिव—आकर्षण और प्रभाव; नेगेटिव—कभी-कभी दिखावे या फिजूलखर्ची में फँसना। सफलता के लिए अनुशासन और वित्तीय नियंत्रण ज़रूरी है। उपयुक्त प्रोफेशन: फैशन, इवेंट मैनेजमेंट, फिल्म इंडस्ट्री, पब्लिक रिलेशंस, हाई-एंड बिज़नेस। सावधानी: केवल दिखावे में न उलझें, असली मूल्य पर ध्यान दें।",
        en: "Rahu forward, Venus back — This combination is a mix of luxury and strategy. Such people excel in style, art, and public image. Positive: Charm and influence. Negative: Sometimes getting trapped in show-off or extravagance. For success, discipline and financial control are necessary. Suitable professions: Fashion, event management, film industry, public relations, high-end business. Caution: Do not get lost in appearances, focus on real value."
    },
    "4-7": {
        hi: "आगे राहु, पीछे केतु — यह संयोजन रहस्य और अध्यात्म का विरोधाभासी संगम है। ऐसे लोग दुनियावी और आध्यात्मिक दोनों क्षेत्रों में समझ रखते हैं। पॉज़िटिव—अनोखी दृष्टि और गहन सोच; नेगेटिव—कभी-कभी असमंजस या दोहरे व्यक्तित्व का असर। सफलता के लिए स्पष्ट लक्ष्य और आत्म-अनुशासन ज़रूरी है। उपयुक्त प्रोफेशन: रिसर्च, ज्योतिष, मिस्ट्री-राइटिंग, योग, गुप्तचर सेवा। सावधानी: जीवन में स्थिरता बनाए रखें और भ्रम से बचें।",
        en: "Rahu forward, Ketu back — This combination is a paradoxical union of mystery and spirituality. Such people understand both worldly and spiritual matters. Positive: Unique perspective and deep thinking. Negative: Sometimes confusion or dual personality effects. For success, clear goals and self-discipline are necessary. Suitable professions: Research, astrology, mystery writing, yoga, intelligence services. Caution: Maintain stability in life and avoid confusion."
    },
    "4-8": {
        hi: "आगे राहु, पीछे शनि — यह संयोजन महत्वाकांक्षा और मेहनत का ठोस मेल है। ऐसे लोग धीरे-धीरे लेकिन स्थायी सफलता हासिल करते हैं। पॉज़िटिव—अनुशासन और रणनीतिक मेहनत; नेगेटिव—कभी-कभी अत्यधिक जिद या कठोरता। सफलता के लिए लचीलापन और धैर्य ज़रूरी है। उपयुक्त प्रोफेशन: प्रशासन, सरकारी सेवा, प्रोजेक्ट मैनेजमेंट, बिल्डिंग-डेवलपमेंट, माइनिंग। सावधानी: अनावश्यक टकराव से बचें और टीमवर्क अपनाएँ।",
        en: "Rahu forward, Saturn back — This combination blends ambition with hard work. Such people achieve slow but steady success. Positive: Discipline and strategic hard work. Negative: Sometimes excessive stubbornness or rigidity. For success, flexibility and patience are essential. Suitable professions: Administration, government service, project management, building development, mining. Caution: Avoid unnecessary conflicts and adopt teamwork."
    },
    "4-9": {
        hi: "आगे राहु, पीछे मंगल — यह संयोजन महत्वाकांक्षा और साहस का विस्फोटक मेल है। ऐसे लोग जोखिम लेने और आक्रामक रणनीति अपनाने में माहिर होते हैं। पॉज़िटिव—तेज़ निर्णय और बड़ा विज़न; नेगेटिव—कभी-कभी जल्दबाज़ी और टकराव। सफलता के लिए संयम और दीर्घकालिक सोच ज़रूरी है। उपयुक्त प्रोफेशन: डिफेंस, खेल, पॉलिटिक्स, बिज़नेस लीडरशिप, स्पोर्ट्स मैनेजमेंट। सावधानी: आवेश में गलत कदम न उठाएँ।",
        en: "Rahu forward, Mars back — This combination is an explosive mix of ambition and courage. Such people are skilled at taking risks and adopting aggressive strategies. Positive: Quick decision-making and big vision. Negative: Sometimes haste and conflicts. For success, restraint and long-term thinking are necessary. Suitable professions: Defense, sports, politics, business leadership, sports management. Caution: Do not take wrong steps in a fit of emotion."
    },

    "5-1": {
        hi: "आगे बुध, पीछे सूर्य — यह संयोजन चतुराई और नेतृत्व का मिश्रण है। ऐसे लोग तेज दिमाग और संवाद कौशल से नेतृत्व करते हैं। पॉज़िटिव—नवाचार और लोगों को जोड़ने की क्षमता; नेगेटिव—कभी-कभी अति-आत्मविश्वास या अधीरता। सफलता के लिए धैर्य और दीर्घकालिक योजना ज़रूरी है। उपयुक्त प्रोफेशन: बिज़नेस, मार्केटिंग, मीडिया, पॉलिटिक्स, ट्रेनिंग। सावधानी: जल्दबाज़ी में फैसले लेने से बचें।",
        en: "Mercury forward, Sun back — This combination blends cleverness with leadership. Such people lead with sharp minds and communication skills. Positive: Innovation and ability to connect people. Negative: Sometimes overconfidence or impatience. For success, patience and long-term planning are important. Suitable professions: Business, marketing, media, politics, training. Caution: Avoid making hasty decisions."
    },
    "5-2": {
        hi: "आगे बुध, पीछे चंद्र — यह संयोजन बुद्धि और संवेदनशीलता का मेल है। ऐसे लोग दिल और दिमाग दोनों से फैसले लेते हैं। पॉज़िटिव—संवाद और रिश्ते बनाने की कला; नेगेटिव—कभी-कभी अस्थिरता या मूड स्विंग। सफलता के लिए निरंतरता ज़रूरी है। उपयुक्त प्रोफेशन: काउंसलिंग, मार्केटिंग, मीडिया, शिक्षा, टूरिज्म। सावधानी: भावनाओं में बहकर वादे न करें।",
        en: "Mercury forward, Moon back — This combination merges intellect with sensitivity. Such people make decisions with both heart and mind. Positive: Art of communication and building relationships. Negative: Sometimes instability or mood swings. For success, consistency is essential. Suitable professions: Counselling, marketing, media, education, tourism. Caution: Do not make promises under emotional influence."
    },
    "5-3": {
        hi: "आगे बुध, पीछे गुरु — यह संयोजन ज्ञान और संवाद का बेहतरीन संगम है। ऐसे लोग शिक्षण, लेखन और ट्रेनिंग में माहिर होते हैं। पॉज़िटिव—स्पष्ट अभिव्यक्ति और प्रेरित करने की क्षमता; नेगेटिव—कभी-कभी अधिक बोलना या हावी होना। सफलता के लिए सुनना और सीखना ज़रूरी है। उपयुक्त प्रोफेशन: टीचिंग, ट्रेनिंग, पत्रकारिता, पब्लिक स्पीकिंग। सावधानी: दूसरों की राय का सम्मान करें।",
        en: "Mercury forward, Guru back — This combination is an excellent blend of knowledge and communication. Such people excel in teaching, writing, and training. Positive: Clear expression and ability to inspire. Negative: Sometimes talking too much or dominating. For success, listening and learning are essential. Suitable professions: Teaching, training, journalism, public speaking. Caution: Respect others’ opinions."
    },
    "5-4": {
        hi: "आगे बुध, पीछे राहु — यह संयोजन बुद्धि और रणनीति का मिलाजुला रूप है। ऐसे लोग नई योजनाओं और मार्केटिंग में माहिर होते हैं। पॉज़िटिव—तेज़ दिमाग और परिस्थिति अनुसार खुद को ढालने की क्षमता; नेगेटिव—कभी-कभी चालाकी या भ्रम। सफलता के लिए ईमानदारी और स्पष्टता ज़रूरी है। उपयुक्त प्रोफेशन: मार्केटिंग, बिज़नेस, मीडिया, पॉलिटिक्स। सावधानी: छल-कपट से बचें।",
        en: "Mercury forward, Rahu back — This combination mixes intellect with strategy. Such people excel in new plans and marketing. Positive: Sharp mind and adaptability. Negative: Sometimes cunning or confusion. For success, honesty and clarity are essential. Suitable professions: Marketing, business, media, politics. Caution: Avoid deceit."
    },
    "5-5": {
        hi: "आगे बुध, पीछे बुध — यह संयोजन शुद्ध बुद्धि, संवाद और लचीलापन का प्रतीक है। ऐसे लोग नेटवर्किंग और व्यापार में माहिर होते हैं। पॉज़िटिव—नवाचार और बातचीत में निपुणता; नेगेटिव—कभी-कभी अस्थिरता या फोकस की कमी। सफलता के लिए लक्ष्य पर टिके रहना ज़रूरी है। उपयुक्त प्रोफेशन: सेल्स, मार्केटिंग, मीडिया, एडवरटाइजिंग, टूरिज्म। सावधानी: एक साथ कई काम शुरू करने से बचें।",
        en: "Mercury forward, Mercury back — This combination represents pure intellect, communication, and flexibility. Such people excel in networking and business. Positive: Innovation and communication skills. Negative: Sometimes instability or lack of focus. For success, staying focused on goals is important. Suitable professions: Sales, marketing, media, advertising, tourism. Caution: Avoid starting too many things at once."
    },
    "5-6": {
        hi: "आगे बुध, पीछे शुक्र — यह संयोजन संवाद और सौंदर्य का मेल है। ऐसे लोग पब्लिक रिलेशंस, फैशन और मीडिया में उत्कृष्ट होते हैं। पॉज़िटिव—आकर्षण और लोगों को जोड़ने की क्षमता; नेगेटिव—कभी-कभी दिखावा या फिजूलखर्ची। सफलता के लिए वित्तीय अनुशासन ज़रूरी है। उपयुक्त प्रोफेशन: फैशन, मीडिया, इवेंट मैनेजमेंट, पब्लिक रिलेशंस। सावधानी: केवल इमेज पर न टिकें, असली काम पर ध्यान दें।",
        en: "Mercury forward, Venus back — This combination blends communication with beauty. Such people excel in public relations, fashion, and media. Positive: Charm and ability to connect people. Negative: Sometimes show-off or extravagance. For success, financial discipline is important. Suitable professions: Fashion, media, event management, public relations. Caution: Do not rely only on image, focus on real work."
    },
    "5-7": {
        hi: "आगे बुध, पीछे केतु — यह संयोजन बुद्धि और आध्यात्मिकता का संतुलन है। ऐसे लोग ज्ञान और रहस्य दोनों में रुचि रखते हैं। पॉज़िटिव—नई चीजें सीखने और खोजने की प्रवृत्ति; नेगेटिव—कभी-कभी अस्थिरता या एकांतप्रियता। सफलता के लिए स्पष्ट लक्ष्य ज़रूरी है। उपयुक्त प्रोफेशन: रिसर्च, एडवाइजरी, ज्योतिष, मनोविज्ञान। सावधानी: भावनात्मक दूरी कम करें।",
        en: "Mercury forward, Ketu back — This combination balances intellect with spirituality. Such people are interested in both knowledge and mystery. Positive: Tendency to learn and explore new things. Negative: Sometimes instability or isolation. For success, clear goals are necessary. Suitable professions: Research, advisory, astrology, psychology. Caution: Reduce emotional distance."
    },
    "5-8": {
        hi: "आगे बुध, पीछे शनि — यह संयोजन बुद्धि और अनुशासन का मेल है। ऐसे लोग योजनाबद्ध तरीके से सफलता पाते हैं। पॉज़िटिव—संगठन और जिम्मेदारी; नेगेटिव—कभी-कभी कठोरता या नकारात्मक सोच। सफलता के लिए लचीलापन ज़रूरी है। उपयुक्त प्रोफेशन: प्रशासन, बिज़नेस, वित्त, कानून। सावधानी: अत्यधिक आलोचना से बचें।",
        en: "Mercury forward, Saturn back — This combination merges intellect with discipline. Such people achieve success through planning. Positive: Organization and responsibility. Negative: Sometimes rigidity or negative thinking. For success, flexibility is important. Suitable professions: Administration, business, finance, law. Caution: Avoid excessive criticism."
    },
    "5-9": {
        hi: "आगे बुध, पीछे मंगल — यह संयोजन बुद्धि और साहस का गतिशील मेल है। ऐसे लोग तेज़ निर्णय लेते हैं और चुनौतियों से नहीं डरते। पॉज़िटिव—जोश और निर्णायक क्षमता; नेगेटिव—कभी-कभी गुस्सा या जल्दबाज़ी। सफलता के लिए संयम ज़रूरी है। उपयुक्त प्रोफेशन: डिफेंस, खेल, बिज़नेस लीडरशिप, एडवेंचर। सावधानी: आवेश में आकर निर्णय न लें।",
        en: "Mercury forward, Mars back — This combination is a dynamic mix of intellect and courage. Such people take quick decisions and are unafraid of challenges. Positive: Enthusiasm and decisiveness. Negative: Sometimes anger or haste. For success, restraint is necessary. Suitable professions: Defense, sports, business leadership, adventure. Caution: Do not make decisions in a fit of emotion."
    },

    "6-1": {
        hi: "आगे शुक्र, पीछे सूर्य — यह संयोजन सौंदर्य, आकर्षण और नेतृत्व का संगम है। ऐसे लोग पब्लिक इमेज और प्रेजेंटेशन में माहिर होते हैं। पॉज़िटिव—स्टाइल, रचनात्मकता और प्रभाव; नेगेटिव—कभी-कभी घमंड या दिखावा। सफलता के लिए विनम्रता और टीमवर्क ज़रूरी है। उपयुक्त प्रोफेशन: फैशन, फिल्म, मीडिया, पब्लिक रिलेशंस, आर्ट डायरेक्शन। सावधानी: केवल इमेज पर न टिकें, असली काम पर ध्यान दें।",
        en: "Venus forward, Sun back — This combination blends beauty, charm, and leadership. Such people excel in public image and presentation. Positive: Style, creativity, and influence. Negative: Sometimes pride or show-off. For success, humility and teamwork are necessary. Suitable professions: Fashion, film, media, public relations, art direction. Caution: Do not rely solely on image; focus on real work."
    },
    "6-2": {
        hi: "आगे शुक्र, पीछे चंद्र — यह संयोजन कला और संवेदनशीलता का सुंदर मेल है। ऐसे लोग रचनात्मक और भावनात्मक रूप से गहरे होते हैं। पॉज़िटिव—सहानुभूति और कलात्मक दृष्टि; नेगेटिव—कभी-कभी भावनाओं में बहना। सफलता के लिए भावनाओं और व्यावहारिकता का संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: आर्ट, म्यूजिक, डिजाइन, काउंसलिंग, होटल इंडस्ट्री। सावधानी: भावनाओं में बहकर गलत निर्णय न लें।",
        en: "Venus forward, Moon back — This combination is a beautiful blend of art and sensitivity. Such people are creative and emotionally deep. Positive: Empathy and artistic vision. Negative: Sometimes getting carried away by emotions. For success, a balance of emotions and practicality is essential. Suitable professions: Art, music, design, counselling, hotel industry. Caution: Do not make wrong decisions driven by emotions."
    },
    "6-3": {
        hi: "आगे शुक्र, पीछे गुरु — यह संयोजन कला और ज्ञान का आकर्षक मेल है। ऐसे लोग रचनात्मकता में गहराई और शिक्षा में निपुण होते हैं। पॉज़िटिव—सुंदरता के साथ विचारशीलता; नेगेटिव—कभी-कभी विलासिता में खो जाना। सफलता के लिए अनुशासन और फोकस ज़रूरी है। उपयुक्त प्रोफेशन: शिक्षा, कला, डिजाइन, फैशन, ट्रेनिंग। सावधानी: समय और संसाधनों का सही उपयोग करें।",
        en: "Venus forward, Guru back — This combination is an attractive blend of art and knowledge. Such people have depth in creativity and excel in education. Positive: Thoughtfulness with beauty. Negative: Sometimes getting lost in luxury. For success, discipline and focus are important. Suitable professions: Education, art, design, fashion, training. Caution: Use time and resources wisely."
    },
    "6-4": {
        hi: "आगे शुक्र, पीछे राहु — यह संयोजन आकर्षण और रणनीति का मिश्रण है। ऐसे लोग अपने स्टाइल और योजना से लोगों को प्रभावित करते हैं। पॉज़िटिव—नेटवर्किंग और इमेज बिल्डिंग में निपुणता; नेगेटिव—कभी-कभी दिखावा या धोखा। सफलता के लिए सच्चाई और पारदर्शिता ज़रूरी है। उपयुक्त प्रोफेशन: पब्लिक रिलेशंस, पॉलिटिक्स, फैशन, मीडिया। सावधानी: छल-कपट से बचें और विश्वसनीयता बनाए रखें।",
        en: "Venus forward, Rahu back — This combination is a mix of charm and strategy. Such people influence others through style and planning. Positive: Expertise in networking and image building. Negative: Sometimes show-off or deceit. For success, honesty and transparency are essential. Suitable professions: Public relations, politics, fashion, media. Caution: Avoid deceit and maintain credibility."
    },
    "6-5": {
        hi: "आगे शुक्र, पीछे बुध — यह संयोजन आकर्षण और संवाद का शक्तिशाली मेल है। ऐसे लोग पब्लिक डीलिंग और मीडिया में माहिर होते हैं। पॉज़िटिव—लोगों को जोड़ने और मनाने की क्षमता; नेगेटिव—कभी-कभी सतही सोच या फिजूलखर्ची। सफलता के लिए गहराई और वित्तीय अनुशासन ज़रूरी है। उपयुक्त प्रोफेशन: मीडिया, इवेंट मैनेजमेंट, फैशन, पब्लिक रिलेशंस। सावधानी: केवल लोकप्रियता पर ध्यान न दें, गुणवत्ता पर भी काम करें।",
        en: "Venus forward, Mercury back — This combination is a powerful mix of charm and communication. Such people excel in public dealing and media. Positive: Ability to connect and persuade people. Negative: Sometimes shallow thinking or extravagance. For success, depth and financial discipline are important. Suitable professions: Media, event management, fashion, public relations. Caution: Do not focus only on popularity, work on quality too."
    },
    "6-6": {
        hi: "आगे शुक्र, पीछे शुक्र — यह संयोजन शुद्ध सौंदर्य, प्रेम और कला का प्रतीक है। ऐसे लोग रचनात्मक और रिश्तों में वफ़ादार होते हैं। पॉज़िटिव—सौंदर्यबोध और सामंजस्य; नेगेटिव—कभी-कभी अत्यधिक आरामप्रियता। सफलता के लिए मेहनत और अनुशासन ज़रूरी है। उपयुक्त प्रोफेशन: आर्ट, डिजाइन, म्यूजिक, फैशन, इंटीरियर डिजाइन। सावधानी: आराम में खोकर लक्ष्य से न भटकें।",
        en: "Venus forward, Venus back — This combination represents pure beauty, love, and art. Such people are creative and loyal in relationships. Positive: Aesthetic sense and harmony. Negative: Sometimes excessive comfort-loving. For success, hard work and discipline are essential. Suitable professions: Art, design, music, fashion, interior design. Caution: Do not lose sight of goals due to comfort."
    },
    "6-7": {
        hi: "आगे शुक्र, पीछे केतु — यह संयोजन सौंदर्य और आध्यात्मिकता का अनोखा मेल है। ऐसे लोग रचनात्मक होते हैं लेकिन जीवन में गहराई और अर्थ खोजते हैं। पॉज़िटिव—कला में मौलिकता और आध्यात्मिक दृष्टि; नेगेटिव—कभी-कभी एकांतप्रियता या अव्यावहारिकता। सफलता के लिए संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: कला, ध्यान, योग, लेखन, आध्यात्मिक शिक्षा। सावधानी: वास्तविकता से कटने से बचें।",
        en: "Venus forward, Ketu back — This combination is a unique blend of beauty and spirituality. Such people are creative but seek depth and meaning in life. Positive: Originality in art and spiritual vision. Negative: Sometimes isolation or impracticality. For success, balance is essential. Suitable professions: Art, meditation, yoga, writing, spiritual teaching. Caution: Avoid disconnecting from reality."
    },
    "6-8": {
        hi: "आगे शुक्र, पीछे शनि — यह संयोजन सौंदर्य और अनुशासन का संगम है। ऐसे लोग मेहनती होते हैं और कला को पेशेवर ढंग से करते हैं। पॉज़िटिव—कला और जिम्मेदारी का संतुलन; नेगेटिव—कभी-कभी कठोरता या धीमी प्रगति। सफलता के लिए धैर्य और लचीलापन ज़रूरी है। उपयुक्त प्रोफेशन: फैशन, डिजाइन, मैनेजमेंट, इंटीरियर डिजाइन। सावधानी: धैर्य रखें और बदलाव के लिए खुले रहें।",
        en: "Venus forward, Saturn back — This combination merges beauty with discipline. Such people are hardworking and pursue art professionally. Positive: Balance of art and responsibility. Negative: Sometimes rigidity or slow progress. For success, patience and flexibility are important. Suitable professions: Fashion, design, management, interior design. Caution: Be patient and open to change."
    },
    "6-9": {
        hi: "आगे शुक्र, पीछे मंगल — यह संयोजन सौंदर्य और ऊर्जा का गतिशील मेल है। ऐसे लोग रचनात्मक होने के साथ-साथ साहसी और सक्रिय भी होते हैं। पॉज़िटिव—तेज़ कार्रवाई और प्रभाव; नेगेटिव—कभी-कभी गुस्सा या जल्दबाज़ी। सफलता के लिए संयम और योजना ज़रूरी है। उपयुक्त प्रोफेशन: फैशन, इवेंट मैनेजमेंट, मीडिया, खेल। सावधानी: आवेश में आकर काम न करें।",
        en: "Venus forward, Mars back — This combination is a dynamic mix of beauty and energy. Such people are creative as well as courageous and active. Positive: Quick action and influence. Negative: Sometimes anger or haste. For success, restraint and planning are necessary. Suitable professions: Fashion, event management, media, sports. Caution: Do not act in a fit of emotion."
    },

    "7-1": {
        hi: "आगे केतु, पीछे सूर्य — यह संयोजन आध्यात्मिकता और नेतृत्व का मेल है। ऐसे लोग गहन सोच और मजबूत व्यक्तित्व रखते हैं। पॉज़िटिव—दूरदृष्टि और निर्णायकता; नेगेटिव—कभी-कभी अलगाव या अहंकार। सफलता के लिए लोगों से जुड़ाव और लचीलापन ज़रूरी है। उपयुक्त प्रोफेशन: रिसर्च, आध्यात्मिक नेतृत्व, शिक्षा, प्रशासन। सावधानी: खुद को अकेला न करें।",
        en: "Ketu forward, Sun back — This combination blends spirituality with leadership. Such people have deep thinking and a strong personality. Positive: Vision and decisiveness. Negative: Sometimes isolation or pride. For success, connection with people and flexibility are important. Suitable professions: Research, spiritual leadership, education, administration. Caution: Do not isolate yourself."
    },
    "7-2": {
        hi: "आगे केतु, पीछे चंद्र — यह संयोजन आध्यात्मिकता और संवेदनशीलता का मिश्रण है। ऐसे लोग अंतर्ज्ञान और सहानुभूति में मजबूत होते हैं। पॉज़िटिव—गहरी भावनात्मक समझ; नेगेटिव—कभी-कभी भावुकता में बहना। सफलता के लिए भावनाओं पर नियंत्रण ज़रूरी है। उपयुक्त प्रोफेशन: काउंसलिंग, आध्यात्मिक शिक्षा, लेखन, मनोविज्ञान। सावधानी: निर्णय में भावनाओं को हावी न होने दें।",
        en: "Ketu forward, Moon back — This combination blends spirituality with sensitivity. Such people have strong intuition and empathy. Positive: Deep emotional understanding. Negative: Sometimes getting carried away by emotions. For success, control over emotions is necessary. Suitable professions: Counselling, spiritual teaching, writing, psychology. Caution: Do not let emotions dominate decisions."
    },
    "7-3": {
        hi: "आगे केतु, पीछे गुरु — यह संयोजन आध्यात्मिकता और ज्ञान का शक्तिशाली मेल है। ऐसे लोग दर्शन, शोध और शिक्षा में गहराई से जुड़ते हैं। पॉज़िटिव—गहरी सोच और खोज की प्रवृत्ति; नेगेटिव—कभी-कभी व्यावहारिकता की कमी। सफलता के लिए वास्तविकता से जुड़ाव ज़रूरी है। उपयुक्त प्रोफेशन: रिसर्च, अध्यापन, दर्शन, ज्योतिष। सावधानी: आदर्शों में उलझकर वास्तविकता न भूलें।",
        en: "Ketu forward, Guru back — This combination powerfully blends spirituality with knowledge. Such people are deeply involved in philosophy, research, and education. Positive: Deep thinking and investigative nature. Negative: Sometimes lack of practicality. For success, connection with reality is important. Suitable professions: Research, teaching, philosophy, astrology. Caution: Do not get lost in ideals and forget reality."
    },
    "7-4": {
        hi: "आगे केतु, पीछे राहु — यह संयोजन रहस्य और आध्यात्मिकता का विरोधाभासी मेल है। ऐसे लोग गहरी समझ और रणनीतिक सोच रखते हैं। पॉज़िटिव—अनूठा दृष्टिकोण; नेगेटिव—कभी-कभी भ्रम या असमंजस। सफलता के लिए स्पष्ट लक्ष्य ज़रूरी है। उपयुक्त प्रोफेशन: ज्योतिष, रिसर्च, पॉलिटिक्स, गुप्तचर सेवा। सावधानी: मानसिक स्पष्टता बनाए रखें।",
        en: "Ketu forward, Rahu back — This combination is a paradoxical blend of mystery and spirituality. Such people have deep understanding and strategic thinking. Positive: Unique perspective. Negative: Sometimes confusion or indecision. For success, clear goals are necessary. Suitable professions: Astrology, research, politics, intelligence services. Caution: Maintain mental clarity."
    },
    "7-5": {
        hi: "आगे केतु, पीछे बुध — यह संयोजन आध्यात्मिकता और बुद्धि का मेल है। ऐसे लोग गहरी सोच के साथ संवाद में भी निपुण होते हैं। पॉज़िटिव—ज्ञान और अभिव्यक्ति का संतुलन; नेगेटिव—कभी-कभी अत्यधिक विश्लेषण से देरी। सफलता के लिए समय पर निर्णय लेना ज़रूरी है। उपयुक्त प्रोफेशन: शिक्षा, काउंसलिंग, लेखन, रिसर्च। सावधानी: ओवरथिंकिंग से बचें।",
        en: "Ketu forward, Mercury back — This combination blends spirituality with intellect. Such people combine deep thinking with good communication. Positive: Balance of knowledge and expression. Negative: Sometimes delay due to over-analysis. For success, timely decision-making is necessary. Suitable professions: Education, counselling, writing, research. Caution: Avoid overthinking."
    },
    "7-6": {
        hi: "आगे केतु, पीछे शुक्र — यह संयोजन आध्यात्मिकता और कला का सुंदर मेल है। ऐसे लोग रचनात्मकता में गहराई और अर्थ भरते हैं। पॉज़िटिव—कला में आध्यात्मिक दृष्टि; नेगेटिव—कभी-कभी अव्यावहारिकता। सफलता के लिए यथार्थ से जुड़ाव ज़रूरी है। उपयुक्त प्रोफेशन: कला, ध्यान, योग, लेखन। सावधानी: सपनों में खोने से बचें।",
        en: "Ketu forward, Venus back — This combination is a beautiful blend of spirituality and art. Such people fill creativity with depth and meaning. Positive: Spiritual vision in art. Negative: Sometimes impracticality. For success, connection with reality is important. Suitable professions: Art, meditation, yoga, writing. Caution: Avoid getting lost in dreams."
    },
    "7-7": {
        hi: "आगे केतु, पीछे केतु — यह संयोजन गहन आध्यात्मिकता और आत्मचिंतन का प्रतीक है। ऐसे लोग जीवन का अर्थ खोजने में लगे रहते हैं। पॉज़िटिव—आध्यात्मिक जागरूकता; नेगेटिव—कभी-कभी दुनिया से कटाव। सफलता के लिए व्यावहारिकता और सामाजिक जुड़ाव ज़रूरी है। उपयुक्त प्रोफेशन: योग, ध्यान, आध्यात्मिक शिक्षा, ज्योतिष। सावधानी: संतुलन बनाए रखें।",
        en: "Ketu forward, Ketu back — This combination symbolizes deep spirituality and self-reflection. Such people are engaged in seeking the meaning of life. Positive: Spiritual awareness. Negative: Sometimes detachment from the world. For success, practicality and social connection are important. Suitable professions: Yoga, meditation, spiritual teaching, astrology. Caution: Maintain balance."
    },
    "7-8": {
        hi: "आगे केतु, पीछे शनि — यह संयोजन आध्यात्मिकता और अनुशासन का मेल है। ऐसे लोग गहरी सोच के साथ मेहनती और दृढ़निश्चयी होते हैं। पॉज़िटिव—धैर्य और जिम्मेदारी; नेगेटिव—कभी-कभी कठोरता या धीमी प्रगति। सफलता के लिए लचीलापन ज़रूरी है। उपयुक्त प्रोफेशन: आध्यात्मिक मार्गदर्शन, शिक्षा, प्रशासन। सावधानी: बदलाव के लिए खुले रहें।",
        en: "Ketu forward, Saturn back — This combination blends spirituality with discipline. Such people are deep thinkers, hardworking, and determined. Positive: Patience and responsibility. Negative: Sometimes rigidity or slow progress. For success, flexibility is essential. Suitable professions: Spiritual guidance, education, administration. Caution: Be open to change."
    },
    "7-9": {
        hi: "आगे केतु, पीछे मंगल — यह संयोजन आध्यात्मिकता और साहस का अनोखा मेल है। ऐसे लोग विचारों में गहराई और कर्म में ऊर्जा रखते हैं। पॉज़िटिव—साहस और दृढ़ निश्चय; नेगेटिव—कभी-कभी गुस्सा या जल्दबाज़ी। सफलता के लिए संयम और योजना ज़रूरी है। उपयुक्त प्रोफेशन: रक्षा, योग, अध्यापन, नेतृत्व। सावधानी: आवेश में आकर कार्य न करें।",
        en: "Ketu forward, Mars back — This combination is a unique blend of spirituality and courage. Such people have depth in thought and energy in action. Positive: Courage and determination. Negative: Sometimes anger or haste. For success, restraint and planning are necessary. Suitable professions: Defense, yoga, teaching, leadership. Caution: Do not act in a fit of emotion."
    },

    "8-1": {
        hi: "आगे शनि, पीछे सूर्य — यह संयोजन मेहनत और नेतृत्व का मेल है। ऐसे लोग अनुशासन और दृढ़ निश्चय से ऊँचाइयाँ छूते हैं। पॉज़िटिव—धैर्य और संगठन; नेगेटिव—कभी-कभी कठोरता या धीमी प्रगति। सफलता के लिए लचीलापन और बदलाव अपनाना ज़रूरी है। उपयुक्त प्रोफेशन: प्रशासन, सरकारी सेवा, बिज़नेस लीडरशिप, कानून। सावधानी: अत्यधिक सख्ती से बचें।",
        en: "Saturn forward, Sun back — This combination blends hard work with leadership. Such people reach heights through discipline and determination. Positive: Patience and organization. Negative: Sometimes rigidity or slow progress. For success, flexibility and adaptability are important. Suitable professions: Administration, government service, business leadership, law. Caution: Avoid excessive strictness."
    },
    "8-2": {
        hi: "आगे शनि, पीछे चंद्र — यह संयोजन मेहनत और संवेदनशीलता का संतुलन है। ऐसे लोग भावनाओं और जिम्मेदारी को साथ लेकर चलते हैं। पॉज़िटिव—सहानुभूति और धैर्य; नेगेटिव—कभी-कभी भावनात्मक तनाव। सफलता के लिए मानसिक संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: सामाजिक सेवा, काउंसलिंग, प्रशासन, शिक्षा। सावधानी: भावनात्मक थकान से बचें।",
        en: "Saturn forward, Moon back — This combination balances hard work with sensitivity. Such people carry emotions and responsibility together. Positive: Empathy and patience. Negative: Sometimes emotional stress. For success, mental balance is necessary. Suitable professions: Social service, counselling, administration, education. Caution: Avoid emotional burnout."
    },
    "8-3": {
        hi: "आगे शनि, पीछे गुरु — यह संयोजन मेहनत और ज्ञान का मेल है। ऐसे लोग स्थिरता और शिक्षा में विश्वास रखते हैं। पॉज़िटिव—अनुशासन और बुद्धिमानी; नेगेटिव—कभी-कभी बदलाव से डरना। सफलता के लिए नए विचार अपनाना ज़रूरी है। उपयुक्त प्रोफेशन: शिक्षा, प्रशासन, कानून, वित्त। सावधानी: बदलाव के लिए खुले रहें।",
        en: "Saturn forward, Guru back — This combination blends hard work with knowledge. Such people believe in stability and education. Positive: Discipline and wisdom. Negative: Sometimes fear of change. For success, adopting new ideas is necessary. Suitable professions: Education, administration, law, finance. Caution: Be open to change."
    },
    "8-4": {
        hi: "आगे शनि, पीछे राहु — यह संयोजन मेहनत और रणनीति का मेल है। ऐसे लोग धैर्य और चालाकी से सफलता पाते हैं। पॉज़िटिव—दीर्घकालिक योजना; नेगेटिव—कभी-कभी अनैतिक तरीके। सफलता के लिए ईमानदारी ज़रूरी है। उपयुक्त प्रोफेशन: पॉलिटिक्स, बिज़नेस, प्रशासन, रिसर्च। सावधानी: छल-कपट से बचें।",
        en: "Saturn forward, Rahu back — This combination blends hard work with strategy. Such people achieve success through patience and cleverness. Positive: Long-term planning. Negative: Sometimes unethical methods. For success, honesty is essential. Suitable professions: Politics, business, administration, research. Caution: Avoid deceit."
    },
    "8-5": {
        hi: "आगे शनि, पीछे बुध — यह संयोजन मेहनत और बुद्धि का संतुलन है। ऐसे लोग योजनाबद्ध तरीके से काम करते हैं। पॉज़िटिव—संगठन और विश्लेषण क्षमता; नेगेटिव—कभी-कभी अत्यधिक आलोचना। सफलता के लिए सकारात्मक सोच ज़रूरी है। उपयुक्त प्रोफेशन: प्रशासन, बिज़नेस, वित्त, कानून। सावधानी: नकारात्मक सोच से बचें।",
        en: "Saturn forward, Mercury back — This combination balances hard work with intellect. Such people work in a planned manner. Positive: Organization and analytical skills. Negative: Sometimes excessive criticism. For success, positive thinking is important. Suitable professions: Administration, business, finance, law. Caution: Avoid negative thinking."
    },
    "8-6": {
        hi: "आगे शनि, पीछे शुक्र — यह संयोजन मेहनत और सौंदर्य का मेल है। ऐसे लोग कला को अनुशासन के साथ जोड़ते हैं। पॉज़िटिव—संगठन और रचनात्मकता; नेगेटिव—कभी-कभी धीमी प्रगति। सफलता के लिए धैर्य ज़रूरी है। उपयुक्त प्रोफेशन: फैशन, डिजाइन, मैनेजमेंट, कला। सावधानी: जल्दी परिणाम की उम्मीद न करें।",
        en: "Saturn forward, Venus back — This combination blends hard work with beauty. Such people combine art with discipline. Positive: Organization and creativity. Negative: Sometimes slow progress. For success, patience is necessary. Suitable professions: Fashion, design, management, art. Caution: Do not expect quick results."
    },
    "8-7": {
        hi: "आगे शनि, पीछे केतु — यह संयोजन मेहनत और आध्यात्मिकता का मेल है। ऐसे लोग धरातल से जुड़े और गहरी सोच वाले होते हैं। पॉज़िटिव—धैर्य और आत्मचिंतन; नेगेटिव—कभी-कभी अत्यधिक गंभीरता। सफलता के लिए हल्कापन और सकारात्मकता ज़रूरी है। उपयुक्त प्रोफेशन: शिक्षा, ध्यान, योग, प्रशासन। सावधानी: खुद को तनाव में न डालें।",
        en: "Saturn forward, Ketu back — This combination blends hard work with spirituality. Such people are grounded and deep thinkers. Positive: Patience and self-reflection. Negative: Sometimes excessive seriousness. For success, lightness and positivity are necessary. Suitable professions: Education, meditation, yoga, administration. Caution: Do not put yourself under stress."
    },
    "8-8": {
        hi: "आगे शनि, पीछे शनि — यह संयोजन मेहनत, अनुशासन और स्थिरता का चरम है। ऐसे लोग लंबे समय तक संघर्ष करके सफलता पाते हैं। पॉज़िटिव—धैर्य और जिम्मेदारी; नेगेटिव—कभी-कभी जिद और कठोरता। सफलता के लिए लचीलापन ज़रूरी है। उपयुक्त प्रोफेशन: प्रशासन, सरकारी सेवा, कानून, बिल्डिंग-डेवलपमेंट। सावधानी: बदलाव के लिए खुले रहें।",
        en: "Saturn forward, Saturn back — This combination is the peak of hard work, discipline, and stability. Such people achieve success after long struggles. Positive: Patience and responsibility. Negative: Sometimes stubbornness and rigidity. For success, flexibility is necessary. Suitable professions: Administration, government service, law, building development. Caution: Be open to change."
    },
    "8-9": {
        hi: "आगे शनि, पीछे मंगल — यह संयोजन मेहनत और साहस का मेल है। ऐसे लोग कठिन परिस्थितियों में भी डटे रहते हैं। पॉज़िटिव—साहस और दृढ़ता; नेगेटिव—कभी-कभी गुस्सा या हठ। सफलता के लिए संयम और योजना ज़रूरी है। उपयुक्त प्रोफेशन: डिफेंस, खेल, प्रशासन, बिज़नेस लीडरशिप। सावधानी: आवेश में आकर निर्णय न लें।",
        en: "Saturn forward, Mars back — This combination blends hard work with courage. Such people stand firm even in difficult circumstances. Positive: Courage and determination. Negative: Sometimes anger or stubbornness. For success, restraint and planning are necessary. Suitable professions: Defense, sports, administration, business leadership. Caution: Do not make decisions in a fit of emotion."
    },

    "9-1": {
        hi: "आगे मंगल, पीछे सूर्य — यह संयोजन ऊर्जा और नेतृत्व का शक्तिशाली मेल है। ऐसे लोग साहसी, निर्णायक और प्रेरणादायक होते हैं। पॉज़िटिव—तेज़ निर्णय और मजबूत इरादा; नेगेटिव—कभी-कभी गुस्सा या जल्दबाज़ी। सफलता के लिए संयम और धैर्य ज़रूरी है। उपयुक्त प्रोफेशन: डिफेंस, खेल, बिज़नेस लीडरशिप, पॉलिटिक्स। सावधानी: आवेश में आकर फैसले न लें।",
        en: "Mars forward, Sun back — This combination is a powerful mix of energy and leadership. Such people are courageous, decisive, and inspiring. Positive: Quick decisions and strong will. Negative: Sometimes anger or haste. For success, restraint and patience are essential. Suitable professions: Defense, sports, business leadership, politics. Caution: Do not make decisions in a fit of emotion."
    },
    "9-2": {
        hi: "आगे मंगल, पीछे चंद्र — यह संयोजन ऊर्जा और संवेदनशीलता का मेल है। ऐसे लोग साहस और सहानुभूति दोनों रखते हैं। पॉज़िटिव—लोगों को प्रेरित करने की क्षमता; नेगेटिव—कभी-कभी भावनाओं में आवेश। सफलता के लिए भावनात्मक संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: सामाजिक सेवा, डिफेंस, खेल, काउंसलिंग। सावधानी: भावनाओं में बहकर निर्णय न लें।",
        en: "Mars forward, Moon back — This combination blends energy with sensitivity. Such people have both courage and empathy. Positive: Ability to inspire people. Negative: Sometimes emotional impulsiveness. For success, emotional balance is necessary. Suitable professions: Social service, defense, sports, counselling. Caution: Do not make decisions driven by emotions."
    },
    "9-3": {
        hi: "आगे मंगल, पीछे गुरु — यह संयोजन ऊर्जा और ज्ञान का संतुलन है। ऐसे लोग साहस के साथ विचारशील भी होते हैं। पॉज़िटिव—रणनीतिक सोच और दृढ़ निश्चय; नेगेटिव—कभी-कभी जिद। सफलता के लिए लचीलापन ज़रूरी है। उपयुक्त प्रोफेशन: नेतृत्व, शिक्षा, डिफेंस, बिज़नेस। सावधानी: अपनी राय पर अड़े न रहें।",
        en: "Mars forward, Guru back — This combination balances energy with knowledge. Such people are courageous yet thoughtful. Positive: Strategic thinking and determination. Negative: Sometimes stubbornness. For success, flexibility is important. Suitable professions: Leadership, education, defense, business. Caution: Do not be rigid in your views."
    },
    "9-4": {
        hi: "आगे मंगल, पीछे राहु — यह संयोजन ऊर्जा और रणनीति का मिश्रण है। ऐसे लोग तेज़ी से योजना बनाकर अमल करते हैं। पॉज़िटिव—तेज़ निर्णय और चालाकी; नेगेटिव—कभी-कभी जोखिम भरे कदम। सफलता के लिए विवेक ज़रूरी है। उपयुक्त प्रोफेशन: पॉलिटिक्स, डिफेंस, बिज़नेस, एडवेंचर। सावधानी: अनावश्यक जोखिम से बचें।",
        en: "Mars forward, Rahu back — This combination is a mix of energy and strategy. Such people make and execute plans quickly. Positive: Quick decisions and cleverness. Negative: Sometimes risky moves. For success, discretion is important. Suitable professions: Politics, defense, business, adventure. Caution: Avoid unnecessary risks."
    },
    "9-5": {
        hi: "आगे मंगल, पीछे बुध — यह संयोजन ऊर्जा और बुद्धि का मेल है। ऐसे लोग साहस और संवाद दोनों में माहिर होते हैं। पॉज़िटिव—तेज़ सोच और निर्णायकता; नेगेटिव—कभी-कभी जल्दबाज़ी। सफलता के लिए संयम ज़रूरी है। उपयुक्त प्रोफेशन: बिज़नेस, डिफेंस, मीडिया, पब्लिक स्पीकिंग। सावधानी: जल्दबाज़ी में कदम न उठाएँ।",
        en: "Mars forward, Mercury back — This combination blends energy with intellect. Such people excel in both courage and communication. Positive: Quick thinking and decisiveness. Negative: Sometimes haste. For success, restraint is necessary. Suitable professions: Business, defense, media, public speaking. Caution: Do not act in haste."
    },
    "9-6": {
        hi: "आगे मंगल, पीछे शुक्र — यह संयोजन ऊर्जा और आकर्षण का शक्तिशाली मेल है। ऐसे लोग प्रेरणादायक और लोकप्रिय होते हैं। पॉज़िटिव—आकर्षक व्यक्तित्व और नेतृत्व क्षमता; नेगेटिव—कभी-कभी गुस्सा या दिखावा। सफलता के लिए संयम और ईमानदारी ज़रूरी है। उपयुक्त प्रोफेशन: मीडिया, खेल, पॉलिटिक्स, बिज़नेस। सावधानी: आवेश में आकर इमेज खराब न करें।",
        en: "Mars forward, Venus back — This combination is a powerful mix of energy and charm. Such people are inspiring and popular. Positive: Attractive personality and leadership skills. Negative: Sometimes anger or show-off. For success, restraint and honesty are essential. Suitable professions: Media, sports, politics, business. Caution: Do not damage your image in a fit of emotion."
    },
    "9-7": {
        hi: "आगे मंगल, पीछे केतु — यह संयोजन ऊर्जा और आध्यात्मिकता का मेल है। ऐसे लोग साहसी होने के साथ गहरी सोच रखते हैं। पॉज़िटिव—आध्यात्मिक दृष्टि और दृढ़ निश्चय; नेगेटिव—कभी-कभी अलगाव या जिद। सफलता के लिए संतुलन ज़रूरी है। उपयुक्त प्रोफेशन: डिफेंस, योग, शिक्षा, नेतृत्व। सावधानी: दूसरों से दूरी न बनाएँ।",
        en: "Mars forward, Ketu back — This combination blends energy with spirituality. Such people are courageous with deep thinking. Positive: Spiritual vision and determination. Negative: Sometimes isolation or stubbornness. For success, balance is necessary. Suitable professions: Defense, yoga, education, leadership. Caution: Do not distance yourself from others."
    },
    "9-8": {
        hi: "आगे मंगल, पीछे शनि — यह संयोजन ऊर्जा और अनुशासन का मेल है। ऐसे लोग साहसी होने के साथ मेहनती और जिम्मेदार भी होते हैं। पॉज़िटिव—धैर्य और संगठन; नेगेटिव—कभी-कभी कठोरता। सफलता के लिए लचीलापन ज़रूरी है। उपयुक्त प्रोफेशन: डिफेंस, प्रशासन, खेल, बिज़नेस। सावधानी: बदलाव के लिए खुले रहें।",
        en: "Mars forward, Saturn back — This combination blends energy with discipline. Such people are courageous as well as hardworking and responsible. Positive: Patience and organization. Negative: Sometimes rigidity. For success, flexibility is important. Suitable professions: Defense, administration, sports, business. Caution: Be open to change."
    },
    "9-9": {
        hi: "आगे मंगल, पीछे मंगल — यह संयोजन शुद्ध ऊर्जा, साहस और दृढ़ता का प्रतीक है। ऐसे लोग किसी भी चुनौती से नहीं डरते। पॉज़िटिव—तेज़ कार्रवाई और आत्मविश्वास; नेगेटिव—कभी-कभी गुस्सा और जल्दबाज़ी। सफलता के लिए संयम और योजना ज़रूरी है। उपयुक्त प्रोफेशन: डिफेंस, खेल, बिज़नेस, एडवेंचर। सावधानी: भावनाओं में आकर निर्णय न लें।",
        en: "Mars forward, Mars back — This combination represents pure energy, courage, and determination. Such people fear no challenge. Positive: Quick action and self-confidence. Negative: Sometimes anger and haste. For success, restraint and planning are necessary. Suitable professions: Defense, sports, business, adventure. Caution: Do not make decisions driven by emotions."
    },
};

// Chaldean chart
const chaldeanChart = {
    A: 1, I: 1, J: 1, Q: 1, Y: 1,
    B: 2, K: 2, R: 2,
    C: 3, G: 3, L: 3, S: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8
};

const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

const loshuMap = {
    1: "Sun - Leadership, confidence, individuality",
    2: "Moon - Sensitivity, emotions, creativity",
    3: "Jupiter - Wisdom, knowledge, communication",
    4: "Rahu - Planning, discipline, hard work",
    5: "Mercury - Intelligence, adaptability, quick decisions",
    6: "Venus - Love, beauty, relationships",
    7: "Ketu - Spirituality, detachment, intuition",
    8: "Saturn - Hardship, patience, discipline",
    9: "Mars - Energy, courage, aggression"
};

const missingMap = {
    1: "Lack of confidence or leadership qualities.",
    2: "Difficulty expressing emotions, lack of sensitivity.",
    3: "Challenges in communication and learning.",
    4: "Lack of stability, poor planning skills.",
    5: "Difficulty adapting, indecisiveness.",
    6: "Challenges in relationships, lack of harmony.",
    7: "Disconnected from spirituality or intuition.",
    8: "Struggles with discipline, impatience.",
    9: "Low energy, lack of courage."
};


// function downloadReport() {
//     const firstName = document.getElementById("firstName").value.trim();
//     const lastName = document.getElementById("lastName").value.trim();
//     const userName = `${firstName} ${lastName}`.trim() || "User";

//     // Clone report content (skip form/buttons)
//     const reportContent = document.querySelector(".results-container").cloneNode(true);

//     // Add a centered title page
//     const titlePage = document.createElement("div");
//     titlePage.style.textAlign = "center";
//     titlePage.style.padding = "150px 20px";
//     titlePage.style.fontSize = "28px";
//     titlePage.style.fontWeight = "bold";
//     titlePage.style.color = "#b8860b";
//     titlePage.innerHTML = `${userName}<br><span style="font-size:22px;">Numerology Report</span>`;

//     // Create wrapper
//     const wrapper = document.createElement("div");
//     wrapper.appendChild(titlePage);
//     wrapper.appendChild(reportContent);

//     // PDF options
//     const opt = {
//         margin: [10, 10, 10, 10],
//         filename: `${userName.replace(/\s+/g, "_")}_Numerology_Report.pdf`,
//         image: { type: 'jpeg', quality: 1 },
//         html2canvas: { scale: 4, useCORS: true, scrollY: 0 },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     // Generate PDF
//     html2pdf().set(opt).from(wrapper).save();
// }


// For selecting language between Hindi and English
let currentLang = sessionStorage.getItem("lang") || "en";

function setLanguage(lang) {
    // 1. Save + update current language
    currentLang = lang;
    sessionStorage.setItem("lang", lang);

    // 2. Highlight the selected button
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.lang-toggle button[onclick*="setLanguage('${lang}')"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // 3. Re-render current page results if already calculated
    const page = document.body.getAttribute("data-page"); // mark page in <body data-page="personal">
    if (page === "personal") {
        calculatePersonal(true);  // pass flag to re-render
    } else if (page === "mobile") {
        calculateMobile(true);
    } else if (page === "loshu") {
        calculateLoShu(true);
    }
}


function getPersonalityNumber(dobDigits) {                   //for Loshu Grid
    const date = parseInt(dobDigits.slice(0, 2).join(""), 10);
    if (date < 0 || date > 31) {
        alert("Invalid date");
        return -1;
    }
    if (date < 11 || date === 20 || date === 30) {
        return -1;
    } else {
        return (date % 10) + Math.floor(date / 10);
    }
}

function getDestinyNumber(dobDigits) {                      // for Loshu Grid
    const sum = dobDigits.reduce((a, b) => a + b, 0);
    return sum % 9 === 0 ? 9 : sum % 9;
}

function reduceToSingleDigit(num) {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
}

// Number reduction functions
function reduceNumber(num, allowMaster) {
    while (num > 9 && (!allowMaster || (num !== 11 && num !== 22 && num !== 33))) {
        num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
}
function getSingleDigitNoMaster(num) {
    while (num > 9) { num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0); }
    return num;
}
function getSingleDigit(num) {
    while (num > 9) num = num.toString().split('').reduce((a, b) => +a + +b, 0);
    return num;
}

function showFormattedMobile(userMobile) {
    let formatted = '';
    let lastNonZeroDigit = '';
    for (let i = 0; i < userMobile.length; i++) {
        const currentDigit = userMobile[i];
        if (currentDigit === '0') {
            formatted += lastNonZeroDigit || '0';
        } else {
            formatted += currentDigit;
            lastNonZeroDigit = currentDigit;
        }
    }
    let total = formatted.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    let finalDigit = getSingleDigit(total);
    let finalDigitColor = (finalDigit === 4 || finalDigit === 8) ? "red" : "black";
    let msg = `<strong style="color:#b8860b;">Mobile Total :</strong> ${formatted} = ${total} = 
<span style="color:${finalDigitColor}; font-weight:bold;">${finalDigit}</span>`;
    if (finalDigit === 4 || finalDigit === 8) {
        msg += ` <span style="color:red;"><strong>('4 or 8' total is not good, change it)</strong></span>`;
        msg += ` </br><div style="color:blue;">(Last 4 digit should not have 4,6,7 & 8 numbers)</div>`;
        msg += ` <div style="color:green;">(1,2,3,5 is best for last 4 digit)</div>`;
    } else {
        msg += ` <span style="color:red;">('4 or 8' total is not good)</span>`;
        msg += ` </br><div style="color:blue;">(Last 4 digit should not have 4,6,7 & 8 numbers)</div>`;
        msg += ` <div style="color:green;">(1,2,3,5 is best for last 4 digit)</div>`;
    }
    return { msg, finalDigit, formatted };
}


// ------------------ Personal Numerology ------------------ //
function safeReturn(num) {
    if (isNaN(num) || num < 1 || num > 9) return ""; // or return null if you prefer
    return num;
}

function getNameNumber(fullName) {
    let total = 0;
    for (let ch of fullName.toUpperCase()) { if (chaldeanChart[ch]) total += chaldeanChart[ch]; }
    return safeReturn(reduceNumber(total, true));
}
function getSoulUrgeNumber(fullName) {
    let total = 0;
    for (let ch of fullName.toUpperCase()) { if (vowels.includes(ch) && chaldeanChart[ch]) total += chaldeanChart[ch]; }
    return safeReturn(reduceNumber(total, true));
}
function getExpressionNumber(fullName) {
    let total = 0;
    for (let ch of fullName.toUpperCase()) { if (!vowels.includes(ch) && chaldeanChart[ch]) total += chaldeanChart[ch]; }
    return safeReturn(reduceNumber(total, true));
}
function getKuaNumber(year, gender) {
    let yearSum = getSingleDigitNoMaster(year.toString().split('').reduce((a, b) => +a + +b, 0));
    if (gender === "male") { return getSingleDigitNoMaster(11 - yearSum); }
    if (gender === "female") { return getSingleDigitNoMaster(yearSum + 4); }
    return "";
}

// Page function
function calculatePersonal() {
    const name = (document.getElementById('firstName').value + document.getElementById('middleName').value + document.getElementById('lastName').value).toUpperCase();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const fullName = `${firstName} ${middleName} ${lastName}`.replace(/\s+/g, ' ').trim();
    const day = parseInt(dob.substring(0, 2), 10);
    const year = parseInt(dob.substring(4), 10);

    if (!name || dob.length !== 8 || !gender) {
        alert('Please enter full name, DOB (DDMMYYYY), and gender');
        return;
    }

    const personality = getSingleDigitNoMaster(day);
    const destiny = getSingleDigitNoMaster(dob.split('').reduce((a, b) => +a + +b, 0));;
    const nameNum = getNameNumber(name);
    const soulUrge = getSoulUrgeNumber(name);
    const expression = getExpressionNumber(name);
    const kua = getKuaNumber(year, gender);

    let html = `<div class="main-numbers-grid">
    <div class="number-card"><div class="card-label">Personality Number</div><div class="card-value">${personality}</div></div>
    <div class="number-card"><div class="card-label">Destiny Number</div><div class="card-value">${destiny}</div></div>
    <div class="number-card"><div class="card-label">Name Number</div><div class="card-value">${nameNum}</div></div>
    <div class="number-card"><div class="card-label">Soul Urge Number</div><div class="card-value">${soulUrge}</div></div>
    <div class="number-card"><div class="card-label">Expression Number</div><div class="card-value">${expression}</div></div>
    <div class="number-card"><div class="card-label">Kua Number</div><div class="card-value">${kua}</div></div>
</div>`;

    html += `<div class="prediction-box">
        <div class="label">Personality – ${personality}</div>
        <p>${data.personality[personality][currentLang] || "No explanation available."}</p>
    </div>`;

    html += `<div class="prediction-box">
        <div class="label">Destiny – ${destiny}</div>
        <p>${data.destiny[destiny][currentLang] || "No explanation available."}</p>
    </div>`;

    // --- Combo Explanation ---
    let comboKey = `${personality}-${destiny}`;
    if (comboPredictions[comboKey]) {
        html += `<div class="prediction-box">
        <div class="label">Personality + Destiny (${personality} + ${destiny})</div>
        <p>${comboPredictions[comboKey][currentLang] || "No explanation available."}</p>
    </div>`;
    } else {
        html += `<div class="prediction-box">
        <div class="label">Personality + Destiny (${personality} + ${destiny})</div>
        <p>No prediction available for combo ${comboKey}.</p>
    </div>`;
    }

    html += `<div class="prediction-box">
        <div class="label">Name Number - ${nameNum}</div>
        <p>${nameNumberData[nameNum][currentLang]}</p>
    </div>`;

    html += `<div class="prediction-box">
        <div class="label">Soul Urge Number - ${soulUrge}</div>
        <p>${(soulUrgeData[soulUrge] || soulUrgeData.default)[currentLang]}</p>
    </div>`;

    html += `<div class="prediction-box">
        <div class="label">Expression Number - ${expression}</div>
        <p>${expressionData[expression][currentLang]}</p>
    </div>`;

    html += `<div class="prediction-box">
        <div class="label">Kua Number – ${kua}</div>
        <p>${kuaData[kua][currentLang]}</p>
    </div>`;

    document.getElementById('resultsGrid').innerHTML = html;
    document.getElementById('resultsGrid').style.display = 'block';

    document.getElementById("actionButtons").style.display = "flex";
}


// ------------------ Mobile Numerology ------------------ //
const dobMobile = document.getElementById("dob").value;
const day = parseInt(dobMobile.split("-")[2], 10);
const personality = getSingleDigitNoMaster(day);
// Personality vs Mobile match
function checkPersonalityMobileMatch(personalityOutput, finalDigit) {
    const mismatchMap = {
        1: [4, 6, 8],
        2: [4, 5, 6, 7, 8, 9],
        3: [4, 5, 6],
        4: [1, 2, 3, 7, 9],
        5: [2, 3, 9],
        6: [1, 3, 9],
        7: [2, 9],
        8: [1, 2],
        9: [2, 4, 5, 6, 7]
    };
    const mismatch = mismatchMap[personalityOutput] || [];
    if (mismatch.includes(finalDigit)) {
        return `<span style="color:red;"><strong>❌ Not matched, Not good</strong></span>`;
    } else {
        return `<span style="color:green;"><strong>✅ Matched, Good</strong></span>`;
    }
}



function calculateMobile() {
    const mobile = document.getElementById("mobileNumber").value.trim();
    if (!/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }

    // --- Format mobile and calculate ruling ---
    const mobileResult = showFormattedMobile(mobile);
    const correctedMobile = mobileResult.formatted;
    const digits = correctedMobile.split("").map(d => parseInt(d, 10));
    const totalSum = digits.reduce((a, b) => a + b, 0);
    const rulingNumber = getSingleDigit(totalSum);

    // For matching mobile and personality
    const dobMobile = document.getElementById("dob").value;
    const day = parseInt(dobMobile.split("-")[2], 10);
    const personalityforMobile = getSingleDigitNoMaster(day);
    const matchResult = checkPersonalityMobileMatch(personalityforMobile, mobileResult.finalDigit);

    // --- Mobile Details & Match Prediction ---
    let html = `
    <div class="prediction-box universal-container">
        <div class="label">Mobile Details & Match Prediction</div>
        <div><strong style="color:#b8860b;">Mobile Number:</strong> ${mobile}</div>
        <div><strong style="color:#b8860b;">Formatted:</strong> ${correctedMobile}</div>
        <div><strong style="color:#b8860b;">Total Sum:</strong> ${totalSum}</div>
        <div><strong style="color:#b8860b;">Ruling Number:</strong> ${rulingNumber}</div>
        <div style="margin-top:8px;">${mobileResult.msg}</div>
        <div><strong style="color:#b8860b;">Personality & Mobile Match:</strong> ${matchResult}</div>
    </div>
    `;

    // --- Pair Summary and Analysis ---
    const pairsHTML = [];
    let goodCount = 0, badCount = 0, neutralCount = 0;

    for (let i = 0; i < correctedMobile.length - 1; i++) {
        const pair = correctedMobile[i] + correctedMobile[i + 1];
        const natureRaw = (data.pairs[pair] && data.pairs[pair].nature) || "";
        if (natureRaw === "(+)") goodCount++;
        else if (natureRaw === "(-)") badCount++;
        else if (natureRaw === "(+/-)") neutralCount++;
    }

    // Summary row
    pairsHTML.push(`
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:12px; text-align:center;">
        <div style="background:#eafbe7; border-radius:6px; padding:8px; font-weight:bold; color:#1ca61c;">
            Good Pairs<br><span style="font-size:22px;">${goodCount}</span>
        </div>
        <div style="background:#fdeaea; border-radius:6px; padding:8px; font-weight:bold; color:#d32f2f;">
            Bad Pairs<br><span style="font-size:22px;">${badCount}</span>
        </div>
        <div style="background:#eaf1fb; border-radius:6px; padding:8px; font-weight:bold; color:#1976d2;">
            Neutral Pairs<br><span style="font-size:22px;">${neutralCount}</span>
        </div>
        </div>
    `);

    // Legend
    pairsHTML.push(`
        <div class="pair-legend" style="text-align:center; margin-bottom:10px;">
            (<span class="nature-positive"> (+) Good</span>, 
            <span class="nature-negative">(-) Bad</span>, 
            <span class="nature-neutral">(+/-) Neutral</span>)
        </div>
    `);

    // Detailed pairs
    for (let i = 0; i < correctedMobile.length - 1; i++) {
        const pair = correctedMobile[i] + correctedMobile[i + 1];
        const natureRaw = (data.pairs[pair] && data.pairs[pair].nature) || "";
        let natureClass = "";

        if (natureRaw === "(+)") natureClass = "nature-positive";
        else if (natureRaw === "(-)") natureClass = "nature-negative";
        else if (natureRaw === "(+/-)") natureClass = "nature-neutral";

        const natureLabel = natureRaw ? `<span class="${natureClass}">${natureRaw}</span>` : "";
        const pairData = data.pairs[pair] || { en: "No prediction found", hi: "कोई पूर्वानुमान नहीं मिला" };

        const zebraClass = i % 2 === 0 ? "pair-row" : "pair-row zebra";

        pairsHTML.push(`
            <div class='${zebraClass}'>
                <div class='pair-title'>Pair ${pair} ${natureLabel}</div>
                <div class="pair-explanation-hi">${pairData[currentLang]}</div>
            </div>
        `);
    }

    html += `
    <div class="prediction-box universal-container">
        <div class="label"> Mobile Pair Analysis</div>
        <div id="pairOutput">${pairsHTML.join('')}</div>
    </div>
    `;

    // --- Inject into DOM ---
    document.getElementById("resultsGrid").innerHTML = html;
    document.getElementById("resultsGrid").style.display = "block";

    document.getElementById("actionButtons").style.display = "flex";
}

// ------------------ Loshu Grid ------------------ //
// ✅ Loshu planets
const loshuPlanets = {
    1: "Sun", 2: "Moon", 3: "Jupiter", 4: "Rahu",
    5: "Mercury", 6: "Venus", 7: "Ketu", 8: "Saturn", 9: "Mars"
};

// ✅ Vedic planets (names)
const vedicPlanets = {
    1: "Surya",
    2: "Chandra",
    3: "Guru",
    4: "Rahu",
    5: "Buddha",
    6: "Shukra",
    7: "Ketu",
    8: "Shani",
    9: "Mangal"
};

// ✅ Vedic traits (for descriptions)
const vedicTraits = {
    1: "authority, power, strength, ego",
    2: "attraction, sudden variability, sensitivity, feelings, emotions",
    3: "spirituality, friendliness, discipline, expansion, wisdom",
    4: "impulsiveness, mysteriousness, instauration",
    5: "entertainment, intelligence, continuous variability",
    6: "beauty, elegance, art, sensitivity",
    7: "mysticism, intuition, originality",
    8: "wisdom, workability, sadness, sorrow",
    9: "strength, militancy, simplicity, courage"
};


// Build formed/missing planes + Rajyog status for the Lo Shu grid
function generatePlanes(gridRepeat) {
    // helper: is number present in grid?
    const present = n => !!(gridRepeat?.[n]?.length);

    const planes = {
        "Mind / Intellectual Plane (4-9-2)": {
            numbers: [4, 9, 2],
            desc: "Thinking, analysis, planning, study and clarity."
        },
        "Emotional / Spiritual Plane (3-5-7)": {
            numbers: [3, 5, 7],
            desc: "Feelings, intuition, sensitivity, relationships and empathy."
        },
        "Practical / Physical Plane (8-1-6)": {
            numbers: [8, 1, 6],
            desc: "Material life, discipline, hard work, money and practicality."
        },
        "Thought Plane (4-3-8)": {
            numbers: [4, 3, 8],
            desc: "Ideas, visualization, planning and conceptualization."
        },
        "Will Plane (9-5-1)": {
            numbers: [9, 5, 1],
            desc: "Determination, persistence, inner strength and grit."
        },
        "Action Plane (2-7-6)": {
            numbers: [2, 7, 6],
            desc: "Execution, doing, movement, risk-taking and follow-through."
        }
    };


    // Collect formed/missing plane items first, so we can render formed first
    const formedItems = [];
    const missingItems = [];

    Object.entries(planes).forEach(([name, obj]) => {
        const isFormed = obj.numbers.every(present);
        if (isFormed) {
            formedItems.push(
                `<li>
            <span class="present"> ${name}</span>
            <span class="present">(All numbers present → strong influence.)</span><br>
            <span class="desc">${obj.desc}</span>
        </li>`
            );
        } else {
            const missing = obj.numbers.filter(n => !present(n)).join(", ");
            missingItems.push(
                `<li>
            <span class="missing">${name}</span>
            <span class="missing">(Missing numbers: ${missing || "—"})</span><br>
            <span class="desc">${obj.desc}</span>
        </li>`
            );
        }
    });

    // Rajyog logic per your rule:
    // Golden Rajyog → 4-5-6 present
    // Rajat (Silver) Rajyog → 2-5-8 present
    const goldenFormed = [4, 5, 6].every(present);
    const rajatFormed = [2, 5, 8].every(present);

    let rajyogHtml = `<div class="loshu-desc-title">Rajyog Status</div><ul class="plane-list">`;
    if (goldenFormed) {
        rajyogHtml += `<li>
        <span class="present">Golden Rajyog (4-5-6)</span><br>
        <span class="desc">Strong will, discipline, and execution power. Brings authority, stability, and sustained success.</span>
    </li>`;
    }
    if (rajatFormed) {
        rajyogHtml += `<li>
        <span class="present">Rajat (Silver) Rajyog (2-5-8)</span><br>
        <span class="desc">Emotional balance, adaptability, and people harmony. Supports partnerships, networking, and public goodwill.</span>
    </li>`;
    }
    if (!goldenFormed && !rajatFormed) {
        rajyogHtml += `<li>
        <span class="missing">No Rajyog formed</span><br>
        <span class="desc">Neither 4-5-6 nor 2-5-8 is fully present in the grid.</span>
    </li>`;
    }
    rajyogHtml += `</ul>`;

    // Sections: formed first, then missing, then rajyog
    const formedHtml = `<div class="loshu-desc-title">Formed Planes</div><ul class="plane-list">${formedItems.join("") || "<li>None</li>"}</ul>`;
    const missingHtml = `<div class="loshu-desc-title">Missing Planes</div><ul class="plane-list">${missingItems.join("") || "<li>None</li>"}</ul>`;

    return `<div class="loshu-desc-block">${formedHtml}${missingHtml}${rajyogHtml}</div>`;
}

function generateLoshuGrid(dob, kuaNumber) {
    const dobDigits = dob.replace(/\D/g, "").split("").map(Number);

    // Normal Loshu numbers
    const personalityNumber = getPersonalityNumber(dobDigits);
    const destinyNumber = getDestinyNumber(dobDigits);

    const pool = dobDigits.slice();
    if (personalityNumber > 0) {
        pool.push(getSingleDigit(personalityNumber));
    }
    pool.push(destinyNumber);
    if (kuaNumber) pool.push(getSingleDigit(Number(kuaNumber)));

    // Vedic pool (⚡ excludes Kua, uses YY instead of YYYY)
    const yearTwoDigits = dob.substring(6); // last 2 digits of year
    const vedicDob = dob.substring(0, 4) + yearTwoDigits; // DDMMYY
    const vedicDigits = vedicDob.split("").map(Number);

    // Build vedic pool = DDMMYY digits + Personality + Destiny
    const vedicPool = vedicDigits.slice();
    if (personalityNumber > 0) vedicPool.push(getSingleDigit(personalityNumber));
    vedicPool.push(destinyNumber);

    // ✅ Count occurrences
    const gridRepeat = {};
    const vedicRepeat = {};
    for (let i = 1; i <= 9; i++) {
        const loshuCount = pool.filter(d => d === i).length;
        const vedicCount = vedicPool.filter(d => d === i).length;

        gridRepeat[i] = loshuCount > 0 ? i.toString().repeat(loshuCount) : "";
        vedicRepeat[i] = vedicCount > 0 ? i.toString().repeat(vedicCount) : "";
    }

    // ---------------- Loshu Grids ----------------
    const gridHtmlReference = `
    <div class="loshu-grid-block reference-grid">
    <div class="loshu-grid-title">Reference Loshu Grid</div>
    <div class="loshu-grid-table">
    ${[4, 9, 2, 3, 5, 7, 8, 1, 6].map(n => `
        <div class="loshu-cell num-${n}">
        <div>${n}</div>
        <div class="planet-name">${loshuPlanets[n]}</div>
        </div>`).join("")}
    </div>
</div>`;

    const gridHtmlUser = `
    <div class="loshu-grid-block reference-grid">
    <div class="loshu-grid-title">Your Loshu Grid</div>
    <div class="loshu-grid-table">
    ${[4, 9, 2, 3, 5, 7, 8, 1, 6].map(n => `
        <div class="loshu-cell num-${n}">
        <div>${gridRepeat[n] || "–"}</div>
        <div class="planet-name">${loshuPlanets[n]}</div>
        </div>`).join("")}
    </div>
</div>`;

    // ---------------- Vedic Grids ----------------
    const vedicGridRef = `
<div class="loshu-grid-block reference-grid">
    <div class="loshu-grid-title">Reference Vedic Grid</div>
    <div class="loshu-grid-table">
    ${[3, 1, 9, 6, 7, 5, 2, 8, 4].map(n => `
        <div class="loshu-cell num-${n}">
        <div>${n}</div>
        <div class="planet-name">${vedicPlanets[n]}</div>
        </div>`).join("")}
    </div>
</div>`;

    const vedicGridUser = `
<div class="loshu-grid-block reference-grid">
    <div class="loshu-grid-title">Your Vedic Grid</div>
    <div class="loshu-grid-table">
    ${[3, 1, 9, 6, 7, 5, 2, 8, 4].map(n => `
        <div class="loshu-cell num-${n}">
        <div>${vedicRepeat[n] || "–"}</div>
        <div class="planet-name">${vedicPlanets[n]}</div>
        </div>`).join("")}
    </div>
</div>`;

    // ---------------- Descriptions ----------------
    let descHtml = `
    <div class="loshu-desc-block">
        <div class="loshu-desc-title">Loshu Number Descriptions</div>
        <ul class="loshu-desc-list">
        ${[...Array(9).keys()].map(i => {
        const num = i + 1;
        return gridRepeat[num] !== ""
            ? `<li><span class="present">${num}:</span> ${loshuMap[num]} <br><span class="present">(Present ${gridRepeat[num].length} time${gridRepeat[num].length > 1 ? "s" : ""})</span></li>`
            : "";
    }).join("")}
        </ul>
        <div class="loshu-desc-title">Loshu Missing Numbers</div>
        <ul class="loshu-desc-list">
        ${[...Array(9).keys()].map(i => {
        const num = i + 1;
        return gridRepeat[num] === ""
            ? `<li><span class="missing">${num}:</span> ${missingMap[num]}</li>`
            : "";
    }).join("")}
        </ul>
        ${generatePlanes(gridRepeat)}
    </div>

    <div class="loshu-desc-block">
        <div class="loshu-desc-title">Vedic Number Descriptions</div>
        <ul class="loshu-desc-list">
        ${[...Array(9).keys()].map(i => {
        const num = i + 1;
        return vedicRepeat[num] !== ""
            ? `<li><span class="present">${num}:</span> ${vedicPlanets[num]} → ${vedicTraits[num]} <br><span class="present">(Present ${vedicRepeat[num].length} time${vedicRepeat[num].length > 1 ? "s" : ""})</span></li>`
            : "";
    }).join("")}
        </ul>
        <div class="loshu-desc-title">Vedic Missing Numbers</div>
        <ul class="loshu-desc-list">
        ${[...Array(9).keys()].map(i => {
        const num = i + 1;
        return vedicRepeat[num] === ""
            ? `<li><span class="missing">${num}:</span> ${vedicPlanets[num]} → ${vedicTraits[num]}</li>`
            : "";
    }).join("")}
        </ul>
    </div>
`;

    return `<div class="loshu-wrapper">${gridHtmlReference}${gridHtmlUser}${vedicGridRef}${vedicGridUser}</div>${descHtml}`;
}
function calculateLoShu() {
    const dob = document.getElementById("dob").value.trim();
    const gender = document.getElementById("gender").value;

    if (!/^\d{8}$/.test(dob)) {
        alert("Please enter valid DOB in DDMMYYYY format");
        return;
    }

    const year = parseInt(dob.substring(4), 10);
    const kuaNumber = getKuaNumber(year, gender);

    // ✅ Generate Loshu + Vedic grids
    const gridHtml = generateLoshuGrid(dob, kuaNumber);

    // ✅ Render results
    document.getElementById("loshuResults").innerHTML = `
    <div class="prediction-box">
        <div class="label">Your Lo Shu & Vedic Grid Analysis</div>
        ${gridHtml}
    </div>
`;
    document.getElementById("loshuResults").style.display = "block";
    document.getElementById("actionButtons").style.display = "flex";
}





// ------------------ Menu & Session ------------------ //
function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("menuOverlay");
    if (!menu || !overlay) return;  // prevent null error
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}


function logout(e) {
    e?.preventDefault();
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("redirectAfterLogin");
    window.location.href = "password.html";
}


// ------------------ Form Persistence ------------------ //
function saveFormData() {
    const formData = {
        firstName: document.getElementById("firstName")?.value || "",
        middleName: document.getElementById("middleName")?.value || "",
        lastName: document.getElementById("lastName")?.value || "",
        mobileNumber: document.getElementById("mobileNumber")?.value || "",
        dob: document.getElementById("dob")?.value || "",
        gender: document.getElementById("gender")?.value || ""
    };
    sessionStorage.setItem("formData", JSON.stringify(formData));
}

function loadFormData() {
    const stored = sessionStorage.getItem("formData");
    if (!stored) return;

    try {
        const formData = JSON.parse(stored);
        if (formData) {
            if (document.getElementById("firstName")) document.getElementById("firstName").value = formData.firstName || "";
            if (document.getElementById("middleName")) document.getElementById("middleName").value = formData.middleName || "";
            if (document.getElementById("lastName")) document.getElementById("lastName").value = formData.lastName || "";
            if (document.getElementById("mobileNumber")) document.getElementById("mobileNumber").value = formData.mobileNumber || "";
            if (document.getElementById("dob")) document.getElementById("dob").value = formData.dob || "";
            if (document.getElementById("gender")) document.getElementById("gender").value = formData.gender || "";
        }
    } catch (e) {
        console.warn("⚠️ Error parsing stored form data", e);
    }
}
