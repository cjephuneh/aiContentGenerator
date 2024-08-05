export default  [
    {
        name: 'Write Email',
        desc: 'This is your AI-powered Email writer, Help us to  write more professional email.',
        icon:'https://cdn-icons-png.flaticon.com/128/4185/4185808.png',
        category: 'Email',
       
        slug: 'email-write',
        aiPrompt: 'Depends on topic write professional email and give output  in rich text editor format  ',
        form: [
            {
                label: 'Email Topic',
                field: 'input',
                name: 'topic',
                required:true
            },
           
           
        ]
    },
    {
        name: 'Rewrite your email',
        desc: 'This is your AI-powered Email rewrited, Help us to correct your email grammer and write more professional email.',
        icon:'https://cdn-icons-png.flaticon.com/128/6125/6125875.png',
        category: 'Email',
       
        slug: 'email-rewriter',
        aiPrompt: 'Depends on email-body rewrite email and corrrect grammer and give output  in rich text editor format  ',
        form: [
            {
                label: 'Your Email',
                field: 'textarea',
                name: 'email-body',
                required:true
            },
           
           
        ]
    },
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'AI Content Planner',
        desc: 'An AI tool to help plan your content strategy, including blog posts, social media updates, and marketing campaigns.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3211/3211755.png',
        category: 'Content Strategy',
        slug: 'content-planner',
        aiPrompt: 'Generate a monthly content plan based on your goals, target audience, and preferred channels, with a detailed schedule and content ideas in rich text editor format.',
        form: [
            {
                label: 'Enter your goals and target audience',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Preferred channels (e.g., blog, social media)',
                field: 'input',
                name: 'channels',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Caption Generator',
        desc: 'An AI tool that generates engaging and relevant captions for your social media posts based on your input keywords.',
        icon: 'https://cdn-icons-png.flaticon.com/128/9064/9064032.png',
        category: 'Social Media',
        slug: 'social-media-caption-generator',
        aiPrompt: 'Generate creative and engaging social media captions based on the provided keywords and context in rich text editor format.',
        form: [
            {
                label: 'Enter your keywords or main topic',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Video Script Generator',
        desc: 'Create compelling video scripts for your YouTube or marketing videos with this AI tool.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2923/2923087.png',
        category: 'Video Production',
        slug: 'video-script-generator',
        aiPrompt: 'Generate a detailed video script based on your topic and objectives, including an introduction, main content, and call to action in rich text editor format.',
        form: [
            {
                label: 'Enter your video topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Outline or key points for the video',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Press Release Generator',
        desc: 'An AI tool to create professional press releases for your business or events.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2585/2585790.png',
        category: 'Marketing',
        slug: 'press-release-generator',
        aiPrompt: 'Generate a press release based on your company news, event details, and key messages in rich text editor format.',
        form: [
            {
                label: 'Enter your company news or event details',
                field: 'textarea',
                name: 'details',
                required: true
            },
            {
                label: 'Key messages or quotes to include',
                field: 'textarea',
                name: 'messages'
            }
        ]
    },
    {
        name: 'Customer Feedback Analyzer',
        desc: 'Analyze customer feedback and reviews to gain insights and improve your products or services.',
        icon: 'https://cdn-icons-png.flaticon.com/128/167/167758.png',
        category: 'Analytics',
        slug: 'customer-feedback-analyzer',
        aiPrompt: 'Analyze the provided customer feedback to identify common themes, issues, and areas for improvement, with a summary report in rich text editor format.',
        form: [
            {
                label: 'Enter customer feedback or reviews',
                field: 'textarea',
                name: 'feedback',
                required: true
            }
        ]
    },
    {
        name: 'SEO Content Audit',
        desc: 'An AI tool to audit your website content for SEO effectiveness, providing recommendations for improvement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2906/2906291.png',
        category: 'SEO',
        slug: 'seo-content-audit',
        aiPrompt: 'Analyze your website content for SEO effectiveness, including keyword usage, readability, and meta descriptions, with a detailed audit report in rich text editor format.',
        form: [
            {
                label: 'Enter the URL of the content to audit',
                field: 'input',
                name: 'url',
                required: true
            }
        ]
    },
    {
        name: 'Email Subject Line Generator',
        desc: 'Generate engaging and attention-grabbing subject lines for your email marketing campaigns.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921220.png',
        category: 'Email Marketing',
        slug: 'email-subject-line-generator',
        aiPrompt: 'Generate effective subject lines for your email campaigns based on the provided content and target audience in rich text editor format.',
        form: [
            {
                label: 'Enter your email content or main idea',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'FAQ Generator',
        desc: 'Create frequently asked questions and answers for your website or product.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1040/1040234.png',
        category: 'Customer Support',
        slug: 'faq-generator',
        aiPrompt: 'Generate a list of frequently asked questions and answers based on your product or service details in rich text editor format.',
        form: [
            {
                label: 'Enter details about your product or service',
                field: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'Sales Pitch Generator',
        desc: 'Create persuasive and compelling sales pitches for your products or services.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3524/3524587.png',
        category: 'Sales',
        slug: 'sales-pitch-generator',
        aiPrompt: 'Generate a compelling sales pitch based on your product features, benefits, and target audience in rich text editor format.',
        form: [
            {
                label: 'Enter your product features and benefits',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'Podcast Script Generator',
        desc: 'Create engaging podcast scripts with this AI tool, including segments, intros, and conclusions based on your topic.',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        category: 'Podcasting',
        slug: 'podcast-script-generator',
        aiPrompt: 'Generate a detailed podcast script including introduction, main content, and conclusion based on the provided topic and objectives in rich text editor format.',
        form: [
            {
                label: 'Enter your podcast topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Outline or key points for the podcast',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Event Invitation Generator',
        desc: 'Create professional and visually appealing event invitations with this AI tool.',
        icon: 'https://cdn-icons-png.flaticon.com/128/219/219983.png',
        category: 'Event Management',
        slug: 'event-invitation-generator',
        aiPrompt: 'Generate a detailed event invitation based on your event details, including date, time, location, and key highlights in rich text editor format.',
        form: [
            {
                label: 'Enter event details',
                field: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'Customer Persona Creator',
        desc: 'Create detailed customer personas to better understand and target your audience.',
        icon: 'https://cdn-icons-png.flaticon.com/128/611/611571.png',
        category: 'Marketing',
        slug: 'customer-persona-creator',
        aiPrompt: 'Generate a detailed customer persona including demographics, interests, and pain points based on provided information in rich text editor format.',
        form: [
            {
                label: 'Enter key customer details',
                field: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'Competitive Analysis Report',
        desc: 'Analyze your competitors and generate a comprehensive competitive analysis report.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1324/1324634.png',
        category: 'Market Research',
        slug: 'competitive-analysis-report',
        aiPrompt: 'Generate a detailed competitive analysis report including competitor strengths, weaknesses, market positioning, and strategies in rich text editor format.',
        form: [
            {
                label: 'Enter details about your competitors',
                field: 'textarea',
                name: 'competitors',
                required: true
            }
        ]
    },
    {
        name: 'Email Sequence Generator',
        desc: 'Create a series of automated email sequences for your marketing campaigns.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828870.png',
        category: 'Email Marketing',
        slug: 'email-sequence-generator',
        aiPrompt: 'Generate a series of email sequences for a marketing campaign based on your objectives, target audience, and key messages in rich text editor format.',
        form: [
            {
                label: 'Enter your campaign objectives',
                field: 'textarea',
                name: 'objectives',
                required: true
            },
            {
                label: 'Target audience and key messages',
                field: 'textarea',
                name: 'messages'
            }
        ]
    },
    {
        name: 'Landing Page Copy Generator',
        desc: 'Create compelling copy for your landing pages to boost conversions and engagement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2600/2600592.png',
        category: 'Web Copy',
        slug: 'landing-page-copy-generator',
        aiPrompt: 'Generate persuasive and engaging copy for your landing page based on your product, target audience, and key benefits in rich text editor format.',
        form: [
            {
                label: 'Enter your product details',
                field: 'textarea',
                name: 'product',
                required: true
            },
            {
                label: 'Target audience and key benefits',
                field: 'textarea',
                name: 'benefits'
            }
        ]
    },
    {
        name: 'Product Feature Description',
        desc: 'Generate detailed and persuasive descriptions for your product features.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077046.png',
        category: 'Product Management',
        slug: 'product-feature-description',
        aiPrompt: 'Generate detailed and persuasive descriptions for product features based on the provided feature details in rich text editor format.',
        form: [
            {
                label: 'Enter feature details',
                field: 'textarea',
                name: 'feature',
                required: true
            }
        ]
    },
    {
        name: 'Press Kit Generator',
        desc: 'Create a comprehensive press kit for your business or event, including media releases, company background, and key visuals.',
        icon: 'https://cdn-icons-png.flaticon.com/128/463/463606.png',
        category: 'Public Relations',
        slug: 'press-kit-generator',
        aiPrompt: 'Generate a comprehensive press kit including media releases, company background, and key visuals based on the provided details in rich text editor format.',
        form: [
            {
                label: 'Enter press kit details',
                field: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'Customer Journey Map',
        desc: 'Create a visual representation of your customer journey to enhance user experience and identify improvement areas.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2748/2748617.png',
        category: 'Customer Experience',
        slug: 'customer-journey-map',
        aiPrompt: 'Generate a visual representation of the customer journey including key touchpoints, interactions, and pain points based on the provided information in rich text editor format.',
        form: [
            {
                label: 'Enter key customer touchpoints and interactions',
                field: 'textarea',
                name: 'touchpoints',
                required: true
            }
        ]
    },
    {
        name: 'A/B Testing Ideas',
        desc: 'Generate ideas for A/B testing to optimize your marketing strategies and user experience.',
        icon: 'https://cdn-icons-png.flaticon.com/128/5126/5126265.png',
        category: 'Testing',
        slug: 'ab-testing-ideas',
        aiPrompt: 'Generate ideas for A/B testing based on your marketing strategies and goals, including hypotheses and metrics to measure success in rich text editor format.',
        form: [
            {
                label: 'Enter your marketing strategies and goals',
                field: 'textarea',
                name: 'strategies',
                required: true
            }
        ]
    },
    {
        name: 'Sales Funnel Generator',
        desc: 'Create a detailed sales funnel to guide your prospects through the purchasing process.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2715/2715941.png',
        category: 'Sales',
        slug: 'sales-funnel-generator',
        aiPrompt: 'Generate a detailed sales funnel including stages, key actions, and messaging based on your sales process and target audience in rich text editor format.',
        form: [
            {
                label: 'Enter your sales process details',
                field: 'textarea',
                name: 'process',
                required: true
            }
        ]
    },
    {
        name: 'Job Description Generator',
        desc: 'Create detailed and engaging job descriptions to attract the best candidates.',
        icon: 'https://cdn-icons-png.flaticon.com/128/5648/5648794.png',
        category: 'HR',
        slug: 'job-description-generator',
        aiPrompt: 'Generate a detailed job description including responsibilities, qualifications, and company benefits based on the job title and role in rich text editor format.',
        form: [
            {
                label: 'Enter job title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter role details',
                field: 'textarea',
                name: 'details'
            }
        ]
    },
    {
        name: 'Sales Email Templates',
        desc: 'Generate effective sales email templates for various stages of the sales funnel.',
        icon: 'https://cdn-icons-png.flaticon.com/128/722/722695.png',
        category: 'Sales',
        slug: 'sales-email-templates',
        aiPrompt: 'Generate effective sales email templates for different stages of the sales funnel based on the provided stage and target audience in rich text editor format.',
        form: [
            {
                label: 'Enter sales stage and target audience',
                field: 'textarea',
                name: 'stage',
                required: true
            }
        ]
    },
    {
        name: 'Customer Feedback Survey',
        desc: 'Create customized customer feedback surveys to gather insights and improve your products or services.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1183/1183580.png',
        category: 'Customer Feedback',
        slug: 'customer-feedback-survey',
        aiPrompt: 'Generate a customized customer feedback survey including questions and options based on your product or service in rich text editor format.',
        form: [
            {
                label: 'Enter survey topic and key questions',
                field: 'textarea',
                name: 'survey',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Analytics Report',
        desc: 'Generate detailed social media analytics reports to track performance and engagement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2315/2315550.png',
        category: 'Analytics',
        slug: 'social-media-analytics-report',
        aiPrompt: 'Generate a detailed social media analytics report including key metrics, performance trends, and engagement insights based on provided data in rich text editor format.',
        form: [
            {
                label: 'Enter social media metrics and data',
                field: 'textarea',
                name: 'metrics',
                required: true
            }
        ]
    },
    {
        name: 'Competitive Analysis Report',
        desc: 'Generate a comprehensive report comparing your business to competitors, including market positioning, strengths, and weaknesses.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504148.png',
        category: 'Market Research',
        slug: 'competitive-analysis-report',
        aiPrompt: 'Generate a comprehensive competitive analysis report including market positioning, strengths, weaknesses, and strategic insights based on provided competitor data in rich text editor format.',
        form: [
            {
                label: 'Enter competitor details and market data',
                field: 'textarea',
                name: 'analysis',
                required: true
            }
        ]
    },
    {
        name: 'Customer Feedback Analysis',
        desc: 'Analyze customer feedback to identify common themes, sentiments, and areas for improvement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3880/3880992.png',
        category: 'Customer Insights',
        slug: 'customer-feedback-analysis',
        aiPrompt: 'Generate a detailed analysis of customer feedback including common themes, sentiments, and areas for improvement based on provided feedback data in rich text editor format.',
        form: [
            {
                label: 'Enter customer feedback data',
                field: 'textarea',
                name: 'feedback',
                required: true
            }
        ]
    },
    {
        name: 'Event Marketing Plan',
        desc: 'Create a marketing plan for events including strategies, channels, and promotional tactics.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3671/3671123.png',
        category: 'Event Planning',
        slug: 'event-marketing-plan',
        aiPrompt: 'Generate a comprehensive event marketing plan including strategies, channels, and promotional tactics based on provided event details in rich text editor format.',
        form: [
            {
                label: 'Enter event details and marketing objectives',
                field: 'textarea',
                name: 'event-marketing',
                required: true
            }
        ]
    },
    {
        name: 'Sales Funnel Optimization',
        desc: 'Optimize your sales funnel to increase conversions and customer acquisition.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1153/1153228.png',
        category: 'Sales',
        slug: 'sales-funnel-optimization',
        aiPrompt: 'Generate recommendations for optimizing the sales funnel including strategies to increase conversions and customer acquisition based on provided sales data in rich text editor format.',
        form: [
            {
                label: 'Enter sales funnel data and objectives',
                field: 'textarea',
                name: 'funnel',
                required: true
            }
        ]
    },
    {
        name: 'Brand Voice Development',
        desc: 'Develop a consistent brand voice including tone, language, and messaging guidelines.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2179/2179196.png',
        category: 'Branding',
        slug: 'brand-voice-development',
        aiPrompt: 'Generate a detailed brand voice development guide including tone, language, and messaging guidelines based on provided brand details in rich text editor format.',
        form: [
            {
                label: 'Enter brand voice details and guidelines',
                field: 'textarea',
                name: 'voice',
                required: true
            }
        ]
    },
    {
        name: 'Product Launch Plan',
        desc: 'Create a comprehensive plan for launching new products including timelines, marketing strategies, and launch activities.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3062/3062845.png',
        category: 'Product Management',
        slug: 'product-launch-plan',
        aiPrompt: 'Generate a comprehensive product launch plan including timelines, marketing strategies, and launch activities based on provided product details in rich text editor format.',
        form: [
            {
                label: 'Enter product details and launch objectives',
                field: 'textarea',
                name: 'launch',
                required: true
            }
        ]
    },
    {
        name: 'Customer Loyalty Program Design',
        desc: 'Design a customer loyalty program including rewards, tiers, and engagement strategies.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2784/2784084.png',
        category: 'Customer Retention',
        slug: 'customer-loyalty-program-design',
        aiPrompt: 'Generate a detailed customer loyalty program design including rewards, tiers, and engagement strategies based on provided program objectives in rich text editor format.',
        form: [
            {
                label: 'Enter loyalty program details and objectives',
                field: 'textarea',
                name: 'loyalty',
                required: true
            }
        ]
    },
    {
        name: 'Lead Generation Strategy',
        desc: 'Develop a strategy for generating and nurturing leads, including tactics and channels.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2907/2907953.png',
        category: 'Lead Generation',
        slug: 'lead-generation-strategy',
        aiPrompt: 'Generate a comprehensive lead generation strategy including tactics, channels, and nurturing processes based on provided business objectives in rich text editor format.',
        form: [
            {
                label: 'Enter lead generation objectives and tactics',
                field: 'textarea',
                name: 'lead-generation',
                required: true
            }
        ]
    },
    {
        name: 'Email Campaign Templates',
        desc: 'Create templates for email marketing campaigns including promotional, informational, and transactional emails.',
        icon: 'https://cdn-icons-png.flaticon.com/128/724/724912.png',
        category: 'Email Marketing',
        slug: 'email-campaign-templates',
        aiPrompt: 'Generate email campaign templates including promotional, informational, and transactional emails based on provided content and design preferences in rich text editor format.',
        form: [
            {
                label: 'Enter email campaign content and design preferences',
                field: 'textarea',
                name: 'emails',
                required: true
            }
        ]
    },
    {
        name: 'Product Market Fit Analysis',
        desc: 'Analyze and determine the fit of your product in the market, including user needs and competitive landscape.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2739/2739404.png',
        category: 'Product Management',
        slug: 'product-market-fit-analysis',
        aiPrompt: 'Generate a detailed product market fit analysis including user needs, competitive landscape, and strategic recommendations based on provided product and market data in rich text editor format.',
        form: [
            {
                label: 'Enter product and market data',
                field: 'textarea',
                name: 'market-fit',
                required: true
            }
        ]
    },
    {
        name: 'Content Distribution Plan',
        desc: 'Create a plan for distributing content across various channels to maximize reach and engagement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2446/2446093.png',
        category: 'Content Marketing',
        slug: 'content-distribution-plan',
        aiPrompt: 'Generate a comprehensive content distribution plan including channels, timing, and engagement strategies based on provided content details in rich text editor format.',
        form: [
            {
                label: 'Enter content details and distribution objectives',
                field: 'textarea',
                name: 'distribution',
                required: true
            }
        ]
    },
    {
        name: 'Website Usability Audit',
        desc: 'Conduct an audit of your website’s usability to identify areas for improvement and enhance user experience.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1813/1813715.png',
        category: 'Web Development',
        slug: 'website-usability-audit',
        aiPrompt: 'Generate a detailed usability audit report including identified issues, recommendations for improvement, and best practices based on provided website details in rich text editor format.',
        form: [
            {
                label: 'Enter website details and usability goals',
                field: 'textarea',
                name: 'usability',
                required: true
            }
        ]
    },
    {
        name: 'Brand Identity Guide',
        desc: 'Create a comprehensive brand identity guide including logo usage, color schemes, and typography.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3011/3011133.png',
        category: 'Branding',
        slug: 'brand-identity-guide',
        aiPrompt: 'Generate a comprehensive brand identity guide including logo usage, color schemes, typography, and brand voice based on provided brand details in rich text editor format.',
        form: [
            {
                label: 'Enter brand details',
                field: 'textarea',
                name: 'brand',
                required: true
            }
        ]
    },
    {
        name: 'Marketing Campaign Tracker',
        desc: 'Track and manage your marketing campaigns with detailed performance metrics and insights.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2620/2620270.png',
        category: 'Marketing',
        slug: 'marketing-campaign-tracker',
        aiPrompt: 'Generate a detailed marketing campaign tracker including performance metrics, key insights, and recommendations based on provided campaign data in rich text editor format.',
        form: [
            {
                label: 'Enter campaign details and performance metrics',
                field: 'textarea',
                name: 'campaign',
                required: true
            }
        ]
    },
    {
        name: 'Event Schedule Planner',
        desc: 'Create detailed schedules for events, including sessions, speakers, and timings.',
        icon: 'https://cdn-icons-png.flaticon.com/128/866/866827.png',
        category: 'Event Management',
        slug: 'event-schedule-planner',
        aiPrompt: 'Generate a detailed event schedule including sessions, speakers, timings, and other relevant details based on the provided event information in rich text editor format.',
        form: [
            {
                label: 'Enter event details and schedule',
                field: 'textarea',
                name: 'schedule',
                required: true
            }
        ]
    },
    {
        name: 'Product Launch Plan',
        desc: 'Develop a comprehensive product launch plan including timelines, marketing strategies, and key milestones.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1028/1028703.png',
        category: 'Product Management',
        slug: 'product-launch-plan',
        aiPrompt: 'Generate a comprehensive product launch plan including timelines, marketing strategies, and key milestones based on the provided product details in rich text editor format.',
        form: [
            {
                label: 'Enter product details and launch objectives',
                field: 'textarea',
                name: 'product',
                required: true
            }
        ]
    },
    {
        name: 'Content Calendar',
        desc: 'Create a detailed content calendar to plan and organize your content marketing efforts.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1086/1086761.png',
        category: 'Content Marketing',
        slug: 'content-calendar',
        aiPrompt: 'Generate a detailed content calendar including content topics, publishing dates, and channels based on your content strategy in rich text editor format.',
        form: [
            {
                label: 'Enter content topics and publishing schedule',
                field: 'textarea',
                name: 'calendar',
                required: true
            }
        ]
    },
    {
        name: 'Customer Retention Strategy',
        desc: 'Develop effective strategies to retain customers and improve loyalty.',
        icon: 'https://cdn-icons-png.flaticon.com/128/883/883371.png',
        category: 'Customer Retention',
        slug: 'customer-retention-strategy',
        aiPrompt: 'Generate effective customer retention strategies including loyalty programs, engagement tactics, and feedback mechanisms based on provided customer data in rich text editor format.',
        form: [
            {
                label: 'Enter customer retention goals and data',
                field: 'textarea',
                name: 'strategy',
                required: true
            }
        ]
    },
    {
        name: 'Content Repurposing Ideas',
        desc: 'Generate ideas for repurposing your existing content into new formats and channels.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2087/2087717.png',
        category: 'Content Strategy',
        slug: 'content-repurposing-ideas',
        aiPrompt: 'Generate ideas for repurposing existing content into new formats, channels, and use cases based on provided content details in rich text editor format.',
        form: [
            {
                label: 'Enter content details and repurposing goals',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Client Proposal Generator',
        desc: 'Create professional client proposals including project scope, timelines, and costs.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3595/3595986.png',
        category: 'Proposals',
        slug: 'client-proposal-generator',
        aiPrompt: 'Generate a professional client proposal including project scope, timelines, costs, and deliverables based on provided project details in rich text editor format.',
        form: [
            {
                label: 'Enter project details and client information',
                field: 'textarea',
                name: 'proposal',
                required: true
            }
        ]
    },
    {
        name: 'Investor Pitch Deck',
        desc: 'Create an engaging investor pitch deck to showcase your business idea and attract potential investors.',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968823.png',
        category: 'Investor Relations',
        slug: 'investor-pitch-deck',
        aiPrompt: 'Generate an engaging investor pitch deck including business overview, market opportunity, financial projections, and team details based on provided business information in rich text editor format.',
        form: [
            {
                label: 'Enter business overview and key details',
                field: 'textarea',
                name: 'pitch',
                required: true
            }
        ]
    },
    {
        name: 'Competitive Pricing Analysis',
        desc: 'Analyze and compare pricing strategies of competitors to optimize your own pricing.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1357/1357350.png',
        category: 'Pricing Strategy',
        slug: 'competitive-pricing-analysis',
        aiPrompt: 'Generate a competitive pricing analysis including competitor pricing strategies, market positioning, and recommendations based on provided data in rich text editor format.',
        form: [
            {
                label: 'Enter competitor pricing and market data',
                field: 'textarea',
                name: 'pricing',
                required: true
            }
        ]
    },
    {
        name: 'User Persona Creation',
        desc: 'Create detailed user personas to better understand and target your audience.',
        icon: 'https://cdn-icons-png.flaticon.com/128/908/908269.png',
        category: 'User Research',
        slug: 'user-persona-creation',
        aiPrompt: 'Generate detailed user personas including demographics, behaviors, needs, and pain points based on provided user data in rich text editor format.',
        form: [
            {
                label: 'Enter user details and behaviors',
                field: 'textarea',
                name: 'persona',
                required: true
            }
        ]
    },
    {
        name: 'Digital Advertising Strategy',
        desc: 'Develop a comprehensive digital advertising strategy including channel selection, budget allocation, and targeting.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2324/2324692.png',
        category: 'Digital Marketing',
        slug: 'digital-advertising-strategy',
        aiPrompt: 'Generate a comprehensive digital advertising strategy including channel selection, budget allocation, and targeting based on provided marketing objectives in rich text editor format.',
        form: [
            {
                label: 'Enter marketing objectives and budget details',
                field: 'textarea',
                name: 'strategy',
                required: true
            }
        ]
    },
    {
        name: 'Product Feature Comparison',
        desc: 'Compare features of different products to highlight strengths and weaknesses.',
        icon: 'https://cdn-icons-png.flaticon.com/128/148/148786.png',
        category: 'Product Management',
        slug: 'product-feature-comparison',
        aiPrompt: 'Generate a detailed comparison of product features including strengths, weaknesses, and differentiators based on provided product details in rich text editor format.',
        form: [
            {
                label: 'Enter product feature details',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'Marketing Collateral Generator',
        desc: 'Create marketing collateral including brochures, flyers, and posters with this AI tool.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1408/1408444.png',
        category: 'Marketing',
        slug: 'marketing-collateral-generator',
        aiPrompt: 'Generate marketing collateral including brochures, flyers, and posters based on provided content and design preferences in rich text editor format.',
        form: [
            {
                label: 'Enter collateral details and design preferences',
                field: 'textarea',
                name: 'collateral',
                required: true
            }
        ]
    },
    {
        name: 'Customer Onboarding Checklist',
        desc: 'Create a comprehensive customer onboarding checklist to ensure a smooth onboarding experience.',
        icon: 'https://cdn-icons-png.flaticon.com/128/748/748106.png',
        category: 'Customer Success',
        slug: 'customer-onboarding-checklist',
        aiPrompt: 'Generate a comprehensive customer onboarding checklist including key steps, resources, and timelines based on provided onboarding requirements in rich text editor format.',
        form: [
            {
                label: 'Enter onboarding requirements and steps',
                field: 'textarea',
                name: 'onboarding',
                required: true
            }
        ]
    },
    {
        name: 'Content Brief Creator',
        desc: 'Create detailed content briefs for your writing and design teams to ensure alignment with goals.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1540/1540994.png',
        category: 'Content Creation',
        slug: 'content-brief-creator',
        aiPrompt: 'Generate a detailed content brief including objectives, target audience, key messages, and deliverables based on provided content details in rich text editor format.',
        form: [
            {
                label: 'Enter content objectives and key details',
                field: 'textarea',
                name: 'brief',
                required: true
            }
        ]
    },
    {
        name: 'Brand Partnership Proposal',
        desc: 'Create a compelling proposal for brand partnerships, including collaboration opportunities and benefits.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2907/2907874.png',
        category: 'Partnerships',
        slug: 'brand-partnership-proposal',
        aiPrompt: 'Generate a compelling brand partnership proposal including collaboration opportunities, mutual benefits, and terms based on provided brand details in rich text editor format.',
        form: [
            {
                label: 'Enter brand partnership details',
                field: 'textarea',
                name: 'proposal',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Content Ideas',
        desc: 'Generate creative social media content ideas to boost engagement and reach.',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732209.png',
        category: 'Social Media',
        slug: 'social-media-content-ideas',
        aiPrompt: 'Generate creative social media content ideas based on provided topics, themes, and objectives in rich text editor format.',
        form: [
            {
                label: 'Enter content topics and objectives',
                field: 'textarea',
                name: 'topics',
                required: true
            }
        ]
    },
    {
        name: 'Market Segmentation Analysis',
        desc: 'Analyze and segment your market to identify target audience groups and opportunities.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2739/2739291.png',
        category: 'Market Research',
        slug: 'market-segmentation-analysis',
        aiPrompt: 'Generate a detailed market segmentation analysis including target audience groups, market opportunities, and strategic recommendations based on provided market data in rich text editor format.',
        form: [
            {
                label: 'Enter market data and segmentation criteria',
                field: 'textarea',
                name: 'segmentation',
                required: true
            }
        ]
    },
    {
        name: 'Customer Journey Optimization',
        desc: 'Optimize your customer journey to enhance user experience and satisfaction.',
        icon: 'https://cdn-icons-png.flaticon.com/128/170/170093.png',
        category: 'Customer Experience',
        slug: 'customer-journey-optimization',
        aiPrompt: 'Generate recommendations for optimizing the customer journey including touchpoints, interactions, and pain points based on provided customer journey data in rich text editor format.',
        form: [
            {
                label: 'Enter customer journey data and goals',
                field: 'textarea',
                name: 'optimization',
                required: true
            }
        ]
    },
    {
        name: 'Influencer Outreach Plan',
        desc: 'Develop a plan for reaching out to influencers for collaborations and promotions.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921371.png',
        category: 'Influencer Marketing',
        slug: 'influencer-outreach-plan',
        aiPrompt: 'Generate a detailed influencer outreach plan including target influencers, collaboration opportunities, and outreach strategies based on provided brand details in rich text editor format.',
        form: [
            {
                label: 'Enter influencer outreach goals and details',
                field: 'textarea',
                name: 'outreach',
                required: true
            }
        ]
    },
    {
        name: 'E-commerce Product Descriptions',
        desc: 'Generate compelling product descriptions for your e-commerce store to attract customers.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1166/1166181.png',
        category: 'E-commerce',
        slug: 'ecommerce-product-descriptions',
        aiPrompt: 'Generate compelling product descriptions including features, benefits, and specifications based on provided product details in rich text editor format.',
        form: [
            {
                label: 'Enter product details and features',
                field: 'textarea',
                name: 'product',
                required: true
            }
        ]
    },
    {
        name: 'SEO Content Optimization',
        desc: 'Optimize your content for search engines with keyword suggestions and SEO best practices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2157/2157258.png',
        category: 'SEO',
        slug: 'seo-content-optimization',
        aiPrompt: 'Generate SEO recommendations for content optimization including keyword suggestions, meta descriptions, and on-page SEO best practices based on provided content details in rich text editor format.',
        form: [
            {
                label: 'Enter content details and target keywords',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Customer Service Response Templates',
        desc: 'Create response templates for common customer service scenarios to streamline communication.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2306/2306222.png',
        category: 'Customer Service',
        slug: 'customer-service-response-templates',
        aiPrompt: 'Generate response templates for common customer service scenarios including queries, complaints, and feedback based on provided scenarios in rich text editor format.',
        form: [
            {
                label: 'Enter customer service scenarios',
                field: 'textarea',
                name: 'scenarios',
                required: true
            }
        ]
    },
    {
        name: 'Brand Messaging Framework',
        desc: 'Develop a comprehensive brand messaging framework including key messages, tone, and positioning.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2696/2696167.png',
        category: 'Branding',
        slug: 'brand-messaging-framework',
        aiPrompt: 'Generate a comprehensive brand messaging framework including key messages, tone, and positioning based on provided brand details in rich text editor format.',
        form: [
            {
                label: 'Enter brand messaging details',
                field: 'textarea',
                name: 'messaging',
                required: true
            }
        ]
    },
    {
        name: 'Product Feature Roadmap',
        desc: 'Create a detailed product feature roadmap including upcoming features, timelines, and priorities.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2817/2817721.png',
        category: 'Product Management',
        slug: 'product-feature-roadmap',
        aiPrompt: 'Generate a detailed product feature roadmap including upcoming features, timelines, and priorities based on provided product details in rich text editor format.',
        form: [
            {
                label: 'Enter product features and timelines',
                field: 'textarea',
                name: 'roadmap',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Content Calendar',
        desc: 'Create a content calendar for social media, including scheduling posts, themes, and engagement strategies.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077012.png',
        category: 'Social Media',
        slug: 'social-media-content-calendar',
        aiPrompt: 'Generate a social media content calendar including post scheduling, themes, and engagement strategies based on provided social media objectives in rich text editor format.',
        form: [
            {
                label: 'Enter social media objectives and content themes',
                field: 'textarea',
                name: 'calendar',
                required: true
            }
        ]
    },
    {
        name: 'Competitor Product Feature Analysis',
        desc: 'Analyze and compare the features of competitor products to identify gaps and opportunities.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2912/2912067.png',
        category: 'Market Analysis',
        slug: 'competitor-product-feature-analysis',
        aiPrompt: 'Generate a detailed analysis of competitor product features including comparisons, gaps, and opportunities based on provided product data in rich text editor format.',
        form: [
            {
                label: 'Enter competitor product details',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'Customer Journey Mapping',
        desc: 'Create a visual map of the customer journey, identifying key touchpoints and experiences.',
        icon: 'https://cdn-icons-png.flaticon.com/128/727/727866.png',
        category: 'Customer Experience',
        slug: 'customer-journey-mapping',
        aiPrompt: 'Generate a visual map of the customer journey including key touchpoints and experiences based on provided customer data in rich text editor format.',
        form: [
            {
                label: 'Enter customer touchpoints and experiences',
                field: 'textarea',
                name: 'journey',
                required: true
            }
        ]
    },
    {
        name: 'Ad Campaign Performance Report',
        desc: 'Generate a performance report for advertising campaigns, including metrics and ROI analysis.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2481/2481155.png',
        category: 'Advertising',
        slug: 'ad-campaign-performance-report',
        aiPrompt: 'Generate a detailed performance report for advertising campaigns including metrics, ROI analysis, and recommendations based on provided campaign data in rich text editor format.',
        form: [
            {
                label: 'Enter ad campaign data and metrics',
                field: 'textarea',
                name: 'campaign',
                required: true
            }
        ]
    },
    {
        name: 'Customer Segmentation Analysis',
        desc: 'Analyze and segment your customer base to tailor marketing strategies and improve engagement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1007/1007486.png',
        category: 'Customer Insights',
        slug: 'customer-segmentation-analysis',
        aiPrompt: 'Generate a detailed customer segmentation analysis including key segments, behaviors, and recommendations based on provided customer data in rich text editor format.',
        form: [
            {
                label: 'Enter customer data and segmentation objectives',
                field: 'textarea',
                name: 'segmentation',
                required: true
            }
        ]
    },
    {
        name: 'Content Performance Analysis',
        desc: 'Analyze the performance of your content across various platforms to optimize strategies and engagement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1706/1706165.png',
        category: 'Content Marketing',
        slug: 'content-performance-analysis',
        aiPrompt: 'Generate a detailed performance analysis of your content including metrics, engagement, and recommendations based on provided content data in rich text editor format.',
        form: [
            {
                label: 'Enter content performance metrics',
                field: 'textarea',
                name: 'performance',
                required: true
            }
        ]
    },
    {
        name: 'Sales Forecasting Model',
        desc: 'Create a model for forecasting sales based on historical data and market trends.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3155/3155752.png',
        category: 'Sales',
        slug: 'sales-forecasting-model',
        aiPrompt: 'Generate a sales forecasting model including projections based on historical data and market trends provided in rich text editor format.',
        form: [
            {
                label: 'Enter historical sales data and market trends',
                field: 'textarea',
                name: 'forecasting',
                required: true
            }
        ]
    },
    {
        name: 'Brand Awareness Survey Analysis',
        desc: 'Analyze survey results on brand awareness to gauge public perception and identify areas for improvement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1788/1788725.png',
        category: 'Branding',
        slug: 'brand-awareness-survey-analysis',
        aiPrompt: 'Generate a detailed analysis of brand awareness survey results including public perception and areas for improvement based on provided survey data in rich text editor format.',
        form: [
            {
                label: 'Enter brand awareness survey results',
                field: 'textarea',
                name: 'survey',
                required: true
            }
        ]
    },
    {
        name: 'Customer Retention Strategy',
        desc: 'Develop strategies to retain existing customers and improve loyalty and satisfaction.',
        icon: 'https://cdn-icons-png.flaticon.com/128/889/889125.png',
        category: 'Customer Retention',
        slug: 'customer-retention-strategy',
        aiPrompt: 'Generate a detailed customer retention strategy including tactics to improve loyalty and satisfaction based on provided customer data in rich text editor format.',
        form: [
            {
                label: 'Enter customer retention objectives and tactics',
                field: 'textarea',
                name: 'retention',
                required: true
            }
        ]
    },
    {
        name: 'Market Entry Strategy',
        desc: 'Develop a strategy for entering new markets, including analysis of opportunities and challenges.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1047/1047882.png',
        category: 'Market Strategy',
        slug: 'market-entry-strategy',
        aiPrompt: 'Generate a detailed market entry strategy including opportunities, challenges, and recommendations based on provided market data in rich text editor format.',
        form: [
            {
                label: 'Enter market entry objectives and data',
                field: 'textarea',
                name: 'market-entry',
                required: true
            }
        ]
    },
    {
        name: 'Pricing Strategy Optimization',
        desc: 'Optimize your pricing strategy to maximize profitability and market competitiveness.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170595.png',
        category: 'Pricing',
        slug: 'pricing-strategy-optimization',
        aiPrompt: 'Generate recommendations for optimizing your pricing strategy including pricing models, profitability, and market competitiveness based on provided pricing data in rich text editor format.',
        form: [
            {
                label: 'Enter pricing strategy data and objectives',
                field: 'textarea',
                name: 'pricing',
                required: true
            }
        ]
    },
    {
        name: 'Customer Onboarding Experience',
        desc: 'Design an optimized onboarding experience for new customers to enhance satisfaction and retention.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2907/2907867.png',
        category: 'Customer Experience',
        slug: 'customer-onboarding-experience',
        aiPrompt: 'Generate a detailed design for customer onboarding experience including steps, communication, and engagement strategies based on provided customer data in rich text editor format.',
        form: [
            {
                label: 'Enter onboarding objectives and design details',
                field: 'textarea',
                name: 'onboarding',
                required: true
            }
        ]
    },
    {
        name: 'Influencer Partnership Strategy',
        desc: 'Create a strategy for partnering with influencers to enhance brand visibility and reach.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3050/3050150.png',
        category: 'Influencer Marketing',
        slug: 'influencer-partnership-strategy',
        aiPrompt: 'Generate a comprehensive influencer partnership strategy including partnership goals, influencer selection, and engagement tactics based on provided brand details in rich text editor format.',
        form: [
            {
                label: 'Enter influencer partnership goals and details',
                field: 'textarea',
                name: 'partnership',
                required: true
            }
        ]
    },
    {
        name: 'Product Review Analysis',
        desc: 'Analyze product reviews to identify common issues, strengths, and areas for improvement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1400/1400964.png',
        category: 'Product Management',
        slug: 'product-review-analysis',
        aiPrompt: 'Generate a detailed analysis of product reviews including common issues, strengths, and areas for improvement based on provided review data in rich text editor format.',
        form: [
            {
                label: 'Enter product review data',
                field: 'textarea',
                name: 'reviews',
                required: true
            }
        ]
    },
    {
        name: 'Crisis Management Plan',
        desc: 'Develop a plan for managing crises and mitigating potential risks to your business.',
        icon: 'https://cdn-icons-png.flaticon.com/128/709/709743.png',
        category: 'Risk Management',
        slug: 'crisis-management-plan',
        aiPrompt: 'Generate a comprehensive crisis management plan including risk mitigation strategies, communication plans, and response procedures based on provided risk data in rich text editor format.',
        form: [
            {
                label: 'Enter crisis management objectives and risk data',
                field: 'textarea',
                name: 'crisis-management',
                required: true
            }
        ]
    },
    {
        name: 'Employee Engagement Survey Analysis',
        desc: 'Analyze employee engagement survey results to identify strengths, weaknesses, and areas for improvement.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1657/1657574.png',
        category: 'HR & Management',
        slug: 'employee-engagement-survey-analysis',
        aiPrompt: 'Generate a detailed analysis of employee engagement survey results including strengths, weaknesses, and areas for improvement based on provided survey data in rich text editor format.',
        form: [
            {
                label: 'Enter employee engagement survey results',
                field: 'textarea',
                name: 'engagement',
                required: true
            }
        ]
    },
    {
        name: 'Competitor Pricing Analysis',
        desc: 'Analyze competitor pricing strategies to identify pricing trends and opportunities for your own products.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1640/1640770.png',
        category: 'Pricing Strategy',
        slug: 'competitor-pricing-analysis',
        aiPrompt: 'Generate a detailed analysis of competitor pricing strategies including pricing trends, opportunities, and recommendations based on provided pricing data in rich text editor format.',
        form: [
            {
                label: 'Enter competitor pricing data',
                field: 'textarea',
                name: 'pricing',
                required: true
            }
        ]
    },
    {
        name: 'Product Development Roadmap',
        desc: 'Create a roadmap for product development, including milestones, timelines, and key deliverables.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4301/4301226.png',
        category: 'Product Management',
        slug: 'product-development-roadmap',
        aiPrompt: 'Generate a detailed product development roadmap including milestones, timelines, and key deliverables based on provided product details in rich text editor format.',
        form: [
            {
                label: 'Enter product development objectives and milestones',
                field: 'textarea',
                name: 'roadmap',
                required: true
            }
        ]
    },
    {
        name: 'Customer Feedback Integration Plan',
        desc: 'Develop a plan for integrating customer feedback into product or service improvements.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3352/3352667.png',
        category: 'Customer Feedback',
        slug: 'customer-feedback-integration-plan',
        aiPrompt: 'Generate a detailed plan for integrating customer feedback into product or service improvements including processes and strategies based on provided feedback data in rich text editor format.',
        form: [
            {
                label: 'Enter customer feedback and integration strategies',
                field: 'textarea',
                name: 'feedback',
                required: true
            }
        ]
    },
    {
        name: 'Business Process Automation Plan',
        desc: 'Create a plan for automating business processes to improve efficiency and reduce manual tasks.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2721/2721315.png',
        category: 'Process Management',
        slug: 'business-process-automation-plan',
        aiPrompt: 'Generate a comprehensive business process automation plan including processes to automate, tools, and implementation strategies based on provided business data in rich text editor format.',
        form: [
            {
                label: 'Enter processes to automate and automation objectives',
                field: 'textarea',
                name: 'automation',
                required: true
            }
        ]
    },
    {
        name: 'E-commerce Strategy Development',
        desc: 'Develop a strategy for optimizing e-commerce operations, including sales tactics, marketing, and customer experience.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1916/1916887.png',
        category: 'E-commerce',
        slug: 'e-commerce-strategy-development',
        aiPrompt: 'Generate a comprehensive e-commerce strategy including sales tactics, marketing, and customer experience based on provided e-commerce objectives in rich text editor format.',
        form: [
            {
                label: 'Enter e-commerce objectives and operational details',
                field: 'textarea',
                name: 'e-commerce',
                required: true
            }
        ]
    },
    {
        name: 'Employee Training Program',
        desc: 'Design a training program for employees, including modules, schedules, and assessment criteria.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2965/2965726.png',
        category: 'Training & Development',
        slug: 'employee-training-program',
        aiPrompt: 'Generate a detailed employee training program including modules, schedules, and assessment criteria based on provided training objectives in rich text editor format.',
        form: [
            {
                label: 'Enter training objectives and program details',
                field: 'textarea',
                name: 'training',
                required: true
            }
        ]
    },
    {
        name: 'Customer Service Improvement Plan',
        desc: 'Develop a plan for improving customer service, including strategies, training, and performance metrics.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2796/2796810.png',
        category: 'Customer Service',
        slug: 'customer-service-improvement-plan',
        aiPrompt: 'Generate a comprehensive customer service improvement plan including strategies, training, and performance metrics based on provided customer service data in rich text editor format.',
        form: [
            {
                label: 'Enter customer service objectives and improvement strategies',
                field: 'textarea',
                name: 'service',
                required: true
            }
        ]
    },
    {
        name: 'Website SEO Audit',
        desc: 'Conduct an audit of your website’s SEO performance, identifying areas for improvement and optimization.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3165/3165722.png',
        category: 'SEO',
        slug: 'website-seo-audit',
        aiPrompt: 'Generate a detailed SEO audit report including identified issues, optimization recommendations, and best practices based on provided website data in rich text editor format.',
        form: [
            {
                label: 'Enter website SEO data and objectives',
                field: 'textarea',
                name: 'seo',
                required: true
            }
        ]
    },
    {
        name: 'Digital Marketing Funnel Analysis',
        desc: 'Analyze your digital marketing funnel to identify bottlenecks and opportunities for optimization.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2882/2882841.png',
        category: 'Digital Marketing',
        slug: 'digital-marketing-funnel-analysis',
        aiPrompt: 'Generate a detailed analysis of your digital marketing funnel including identified bottlenecks, opportunities, and recommendations based on provided marketing data in rich text editor format.',
        form: [
            {
                label: 'Enter digital marketing funnel data',
                field: 'textarea',
                name: 'funnel',
                required: true
            }
        ]
    }
];
   



