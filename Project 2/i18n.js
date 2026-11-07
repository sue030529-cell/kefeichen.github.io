/**
 * i18n.js - Multi-language switcher (中/EN 语言无缝即时切换系统)
 * Supports persistent language choice via localStorage and real-time DOM translation.
 */

const translations = {
  zh: {
    // 导航与通用
    "nav.home": "首页",
    "nav.gallery": "作品与项目",
    "nav.resume": "个人简历",
    "nav.contact": "联系我 💌",
    "brand.name": "陈可非 <span class=\"brand-script\">Susan</span>",
    "brand.subtitle": "新加坡国立大学 × 多伦多大学 · 个人作品集",
    "lang.toggle_btn": "EN",

    // 页脚
    "footer.brand_title": "陈可非 (Susan) 🌸",
    "footer.brand_desc": "新加坡国立大学战略传播硕士 · 多伦多大学荣誉学士。",
    "footer.nav_title": "网站导航",
    "footer.social_title": "社交联络",
    "footer.bottom": "© 2026 陈可非 · 个人作品集 💖",

    // 首页 Hero
    "home.hero_name": "陈可非",
    "home.hero_subtitle": "品牌战略策划 · 多媒体创意设计 · 数字内容叙事",
    "home.hero_bio": "你好，我是陈可非（Susan）。目前在<strong>新加坡国立大学攻读战略传播硕士</strong>，本科毕业于<strong>多伦多大学</strong>（CCIT 与艺术史荣誉学士）。",
    "home.btn_projects": "浏览精选项目 🎀",
    "home.btn_experience": "实习与履历高光 💼",
    "home.btn_contact": "联系我 💌",

    // 首页 精选作品标题
    "home.proj_tag": "🎀 精选作品展",
    "home.proj_title": "核心项目与策划案例",
    "home.proj_desc": "这里整理了品牌策划、市场调研、AI 短片和数字产品设计等项目。",

    // 项目 1: Maison Margiela
    "p1.badge": "🎀 欧莱雅商赛 Brandstorm",
    "p1.tag1": "品牌战略",
    "p1.tag2": "奢侈品营销",
    "p1.tag3": "香氛叙事",
    "p1.tag4": "Canva 演示",
    "p1.title": "Maison Margiela：奢侈品沉浸式体验与品牌传播全案",
    "p1.desc": "为欧莱雅 Brandstorm 准备的方案，围绕 Maison Margiela 的品牌风格和香氛产品，设计线上与线下的体验和传播内容。",
    "p1.btn_canva": "打开 Canva 演示全案 ↗",
    "p1.btn_detail": "查看案例详情",

    // 项目 2: My Dorm Store
    "p2.badge": "🌸 市场营销全案",
    "p2.tag1": "营销漏斗模型",
    "p2.tag2": "B2C 增长",
    "p2.tag3": "品牌 3V 框架",
    "p2.tag4": "Wix 原型",
    "p2.title": "My Dorm Store：B2C 校园宿舍生活方式品牌营销全案",
    "p2.desc": "为面向加拿大大学新生的宿舍用品品牌做市场调研和 2025 年营销计划，包括目标用户、广告预算和 Wix 网站页面改版。计划目标是销售额增长 20%、品牌认知度达到 30%。",
    "p2.btn_pdf": "阅读完整报告 (PDF) ↗",
    "p2.btn_detail": "查看案例详情",

    // 项目 3: 另一场绽放 (AI 短片)
    "p3.badge": "✨ 原创 AI 概念短片",
    "p3.tag1": "AIGC 导演作品",
    "p3.tag2": "Midjourney / Runway",
    "p3.tag3": "原创音乐",
    "p3.tag4": "分镜脚本",
    "p3.title": "《另一场绽放 (In Another Bloom)》：原创 AI 电影级动漫概念短片",
    "p3.desc": "独立编写并制作的 AI 动画短片，尝试让不同场景、画面风格和音乐保持连贯。",
    "p3.btn_yt": "前往 YouTube 观看 ↗",
    "p3.btn_detail": "查看案例详情",

    // 项目 4: SSENSE UI/UX
    "p4.badge": "💖 UI/UX 体验设计",
    "p4.tag1": "Figma 高保真原型",
    "p4.tag2": "交互体验审计",
    "p4.tag3": "奢品数字零售",
    "p4.title": "SSENSE：高定电商数字导购体验重构设计",
    "p4.desc": "分析 SSENSE 网站的购物流程，并用 Figma 制作改版原型，调整商品浏览和结账体验，同时保留品牌简洁的视觉风格。",
    "p4.btn_figma": "在 Figma 中体验原型 ↗",
    "p4.btn_detail": "查看案例详情",

    // 经历看板
    "exp.tag": "💼 职业与学术经历高光",
    "exp.title": "实习履历与教育背景",
    "exp.desc": "有海外社交媒体运营、品牌视觉设计和数字内容项目策划经验。",

    "stat.s1_num": "前 10%",
    "stat.s1_label": "🎓 多大 GPA 3.65 · 连续三年院长荣誉榜",
    "stat.s2_num": "10w+",
    "stat.s2_label": "🚀 爱奇艺海外娱乐短视频爆款播放量",
    "stat.s3_num": "350+ 条",
    "stat.s3_label": "📱 单月多社媒矩阵常态化分发上线",
    "stat.s4_num": "+23%",
    "stat.s4_label": "📈 快看头部顶级 IP 互动模块参与率",

    // 爱奇艺
    "iqiyi.name": "爱奇艺（新加坡 · 全英工作环境）",
    "iqiyi.role": "海外新媒体运营实习生 · Overseas New Media Operations Intern",
    "iqiyi.date": "2026.08 – 至今 · 新加坡",
    "iqiyi.b1": "<strong>海外短视频内容剪辑生产：</strong>负责「瓜瓜娱乐」「韩风追追追」「韩综观察室」3 个海外娱乐账号短视频拆条剪辑，遵循港风繁体统一视觉模板，标准化完成封面、标题、字幕制作；月稳定产出 <strong>120+ 条</strong>陆剧、韩综、Kpop 剪辑片段，打造<strong>破 10w+ 播放量爆款视频 10 条+</strong>，保障各账号固定更新频次，持续输出平台所需优质内容素材。",
    "iqiyi.b2": "<strong>多社媒渠道宣发与排期运营：</strong>高效对接内部内容需求，整理 BGM、热门话题标签等发布配套物料，完成 <strong>TikTok、YouTube、Facebook</strong> 多平台排期分发，结合各平台用户习惯定制文案与标签组合，<strong>单月落地 350+ 条内容上线执行</strong>，实现文娱内容海外常态化矩阵宣发。",

    // GoldPulse Media
    "gp.name": "GoldPulse Media（加拿大）",
    "gp.role": "品牌营销实习生 · Brand Marketing Intern",
    "gp.date": "2025.09 – 2026.04 · 加拿大",
    "gp.b1": "<strong>品牌视觉体系搭建与社媒重塑：</strong>负责 solproperties 房地产公司海外社交品牌视觉体系策划，完成 Logo、动态贴纸、社媒全套视觉物料定义与落地，规范 Instagram 整体视觉语言；改版后单篇封面<strong>稳定收获 3000+ 浏览量，带动互动率提升 5%，粉丝 3 个月净增 1200+</strong>，夯实品牌在海外社交平台的视觉辨识度。",
    "gp.b2": "<strong>海外数字营销全案策划落地：</strong>参与海外房地产数字营销全案策划，深入开展前期市场调研与竞品打法拆解，输出完整营销活动策划思路并全程跟进项目执行协调与复盘，成功支撑 <strong>3 个客户营销项目按时高质量交付落地</strong>。",
    "gp.b3": "<strong>营销数据诊断与精细化策略迭代：</strong>基于社媒传播数据与用户互动行为开展营销效果诊断，拆解曝光、互动、转化核心指标并输出体系化优化建议，反向指导后续品牌策划与传播节奏，大幅提升内容完读率。",

    // 快看
    "kk.name": "北京快看世界科技有限公司 (Kuaikan World)",
    "kk.role": "内容运营实习生 · Content Operations Intern",
    "kk.date": "2025.04 – 2025.06 · 北京",
    "kk.b1": "<strong>多 IP 全周期运营策划管理：</strong>独立承担 <strong>8 个漫画项目</strong>全流程运营策划工作，涵盖前期内容定位、选题规划、排期策划到上线版本配置与全链路管理，<strong>带动项目整体用户停留时长提升 16%</strong>，保障项目稳定运营表现。",
    "kk.b2": "<strong>头部爆款 IP 视觉传播策略：</strong>深度参与头部流量 IP《娘娘腔》传播策划，针对封面展示形式输出视觉包装升级方案，精准触达核心圈层用户，<strong>激活 40,000+ 次核心圈层曝光</strong>，大幅提升 IP 在平台内的声量与吸引力。",
    "kk.b3": "<strong>IP 沉浸式互动玩法产品策划：</strong>聚焦女性向高粘性粉丝特质，搭建专属角色素材库与剧情热点场景，设计沉浸式交互玩法并定制互动运营，<strong>带动该 IP 专属互动模块用户参与率提升 23%</strong>，深化爆款 IP 长效商业价值。",

    // 教育卡片
    "edu.nus_title": "新加坡国立大学 (NUS)",
    "edu.nus_deg": "战略传播 硕士 · Master of Communication (2026.08 – 至今)",
    "edu.nus_desc": "专注于战略品牌传播、数字媒体文化以及数据驱动的消费者洞察前沿学术研究。",
    "edu.uot_title": "多伦多大学 (University of Toronto)",
    "edu.uot_deg": "传播、文化、信息与技术 学士 · BA in CCIT (2022.09 – 2026.06)",
    "edu.uot_desc": "<strong>GPA 3.65/4.0（前 10% 优秀毕业生）</strong> · 荣获 Dr. Annie Smith Travelling Scholarship、入学奖学金，<strong>连续三年登上校长荣誉名单 (Dean's List)</strong>。",
    "home.btn_view_resume": "查看完整简历与专业技能墙 ↗",

    // ================== 作品集页 (Gallery) ==================
    "gallery.hero_tag": "🎀 精选作品集 · PORTFOLIO",
    "gallery.hero_title": "创意项目与<span>艺术作品</span>",
    "gallery.hero_desc": "这里收录了我在品牌策划、市场调研、AI 影像创作与交互设计中的精选项目。",

    "gallery.sec1_tag": "🌸 商业策划与品牌咨询",
    "gallery.sec1_title": "品牌战略全案与市场调研",
    "gallery.sec1_desc": "包括欧莱雅 Brandstorm 方案，以及面向加拿大大学新生的宿舍用品品牌调研。",
    "gallery.btn_canva": "打开 Canva 演示全案 ↗",
    "gallery.pill_strategy": "商业策划全案",
    "gallery.btn_wix": "访问 Wix 落地页 ↗",

    "gallery.sec2_tag": "✨ 前沿媒体与数字艺术",
    "gallery.sec2_title": "生成式 AI 概念短片",
    "gallery.sec2_desc": "一部使用生成式 AI 工具制作的原创动画概念短片。",
    "gallery.film_director_tag": "✨ 独立全流程导演作品",
    "gallery.film_title": "《另一场绽放 (In Another Bloom)》",
    "gallery.film_sub": "原创 AI 电影级动漫概念短片 · 全流程编导作品",
    "gallery.film_desc": "这部短片由陈可非独立编剧和制作，使用生成式 AI 完成画面，并尝试让角色、场景和音乐在不同镜头间保持连贯。",
    "gallery.btn_yt_watch": "前往 YouTube 观看完整视频 ▶",
    "gallery.film_hd_pill": "高清 1080P · 原创音乐",
    "gallery.card_yt_jump": "前往 YouTube 观看 ↗",

    "gallery.sec3_tag": "💖 数字交互与体验设计",
    "gallery.sec3_title": "UI/UX 界面重构与高保真原型",
    "gallery.sec3_desc": "分析 SSENSE 时尚电商的购物体验，并用 Figma 制作改版原型。",
    "gallery.ssense_tag": "Figma 高保真交互原型",
    "gallery.ssense_title": "SSENSE：高定电商数字导购体验重构设计",
    "gallery.ssense_desc": "在保留 SSENSE 简洁视觉风格的同时，调整商品浏览和购物流程。",
    "gallery.btn_figma": "在 Figma 中体验交互原型 ↗",
    "gallery.btn_ssense_pdf": "查阅设计说明手册 (PDF) ↗",

    "gallery.sec4_tag": "🎨 视觉传达与刊物排版",
    "gallery.sec4_title": "印刷媒介与杂志出版",
    "gallery.sec4_desc": "收录我在多伦多大学完成的时尚杂志排版和版画作品。",
    "gallery.mag_tag": "InDesign 刊物编排全案",
    "gallery.mag_title": "时尚杂志排版设计与视觉编辑",
    "gallery.mag_desc": "使用 InDesign 编排的时尚杂志内页，注重画面的留白与舒适的阅读节奏。",
    "gallery.btn_mag_pdf": "全屏浏览完整杂志 PDF ↗",
    "gallery.book_hint": "✦ 鼠标轻触或悬停任意书页 · 翻动浮起放大品读 ✦",
    "gallery.book_label": "🌸 版画与媒介艺术系列",

    // ================== 简历页 (Resume) ==================
    "resume.hero_tag": "🎀 个人履历书 · CURRICULUM VITAE",
    "resume.hero_title": "学术背景与<span>实习经历</span>",
    "resume.hero_desc": "结合新加坡国立大学与多伦多大学的学术视野，拥有海外流媒体运营与品牌营销策划的完整实践经历。",
    "resume.sidebar_title": "新加坡国立大学 · 战略传播硕士在读",
    "resume.sidebar_intro": "热衷于在多媒体语境下构筑动人叙事，精通跨国海外新媒体矩阵运营、品牌战略全案策划、生成式 AI 动漫短片创作及以人为本的用户体验设计。",
    "resume.btn_email": "✉ 电子邮箱联系",
    "resume.btn_linkedin": "领英主页 LinkedIn ↗",

    "resume.skills_title": "专业技能与工具矩阵 🎀",
    "resume.skill_g1": "🌸 品牌与战略策划",
    "resume.skill_g2": "💖 设计软件与数字化工具",
    "resume.skill_g3": "✨ 新媒体运营与生成式技术",
    "resume.skill_g4": "🌐 语言与国际交流能力",

    "resume.work_header": "💼 名企核心实习与实战经历",
    "resume.edu_header": "🎓 教育背景与学术荣誉",
    "resume.proj_header": "🎀 商业策划竞赛与代表作品全案",

    // Resume.html - 技能
    "resume.sk1_1": "品牌视觉体系搭建",
    "resume.sk1_2": "营销漏斗模型拆解",
    "resume.sk1_3": "消费者深度调研",
    "resume.sk1_4": "B2C 出海增长打法",
    "resume.sk1_5": "市场竞品分析与复盘",
    "resume.sk2_1": "Figma 原型",
    "resume.sk2_2": "UI / UX 界面设计",
    "resume.sk2_9": "R 语言 (R Studio)",
    "resume.sk3_1": "海外短视频剪辑与分发",
    "resume.sk3_2": "多社媒矩阵排期运营",
    "resume.sk3_3": "爆款 IP 互动玩法策划",
    "resume.sk3_5": "生成式 AI 动漫短片编导",
    "resume.sk4_1": "英语（雅思 6.5 · 全英文工作语言）",
    "resume.sk4_2": "中文普通话（母语）",

    // Resume.html - 教育卡片细节
    "resume.edu_nus_title": "新加坡国立大学 (National University of Singapore)",
    "resume.edu_nus_deg": "战略传播 硕士 · Master of Communication",
    "resume.edu_nus_badge": "2026.08 – 至今 · 新加坡 🇸🇬",
    "resume.edu_nus_desc": "主修战略品牌传播、数字媒体文化以及数据驱动的全球消费者洞察前沿学术研究。",
    "resume.edu_uot_title": "多伦多大学 (University of Toronto)",
    "resume.edu_uot_deg": "传播、文化、信息与技术 学士 · BA in CCIT & Art History",
    "resume.edu_uot_badge": "2022.09 – 2026.06 · 加拿大 🇨🇦",
    "resume.edu_uot_desc": "<strong>GPA 3.65/4.0（前 10% 优秀毕业生）</strong> · 双主修 CCIT（传播、文化、信息与技术）与艺术及艺术史。综合培养数字人机交互、跨文化媒体叙事、视觉体系规划与前沿数字技术实操能力。",
    "resume.edu_honor1": "🏆 连续三年登上校长荣誉名单 (Dean's List)",
    "resume.edu_honor2": "🏆 Dr. Annie Smith Travelling Scholarship",
    "resume.edu_honor3": "🏆 入学奖学金 (Entrance Scholarship)",

    // Resume.html - 重点项目
    "resume.p1_title": "欧莱雅商业精英挑战赛 (L'Oréal Brandstorm)",
    "resume.p1_role": "Maison Margiela 奢侈品香氛品牌传播战略",
    "resume.p1_badge": "顶尖商业挑战赛 🎀",
    "resume.p1_desc": "构建打通全渠道感官体验的数字叙事框架，将品牌解构哲学转化为 Z 世代数字触点与线下体验方案。",
    "resume.p2_title": "My Dorm Store 校园宿舍家居品牌营销全案",
    "resume.p2_role": "营销策略负责人 · 全案调研主创",
    "resume.p2_badge": "品牌全案调研 🌸",
    "resume.p2_desc": "构建完整市场调研体系与 2025 增长模型（+20% 销售额），完成营销漏斗预算规划与 Wix 官网落地页重塑。",
    "resume.p3_title": "原创 AI 动漫概念短片《另一场绽放 (In Another Bloom)》",
    "resume.p3_role": "独立导演与生成式 AI 视觉主创",
    "resume.p3_badge": "独立艺术创作 ✨",
    "resume.p3_desc": "在 YouTube 发布，独立完成全流程剧本编排、提示词工程架构、角色跨场景一致性与视听节奏同步。",

    // Resume.html - 社团与领导力
    "resume.lead_header": "<span>🤝</span> 校园领导力与社团实践",
    "resume.lead1_title": "多伦多大学中国学生学者联谊会 (UT-CSSA)",
    "resume.lead1_role": "学术部 · 骨干成员",
    "resume.lead1_badge": "学生工作",
    "resume.lead1_desc": "主导组织多场大型学术研讨沙龙、选课经验分享会与新生学业导师对接工作。",
    "resume.lead2_title": "多伦多大学中国学生学者联谊会 (UT-CSSA)",
    "resume.lead2_role": "大型活动部 · 策划统筹",
    "resume.lead2_badge": "活动策划",
    "resume.lead2_desc": "负责多伦多大学大型校园文化晚会、中秋盛典的跨团队流程统筹、商务赞助对接与现场执行。",

    // ================== 联系页 (Contact) ==================
    "contact.hero_tag": "💌 交流与合作 · GET IN TOUCH",
    "contact.hero_title": "期待与你<span>取得联系</span>",
    "contact.hero_desc": "无论是商业品牌全案咨询、创意设计机会还是数字媒体合作，欢迎随时通过以下方式与我联系。",
    "contact.card_role": "品牌战略策划 · 新加坡国立大学硕士在读",
    "contact.email_label1": "常用电子邮箱",
    "contact.email_label2": "大学官方学术邮箱",
    "contact.wechat_label": "微信联系方式 (WeChat)",
    "contact.phone_label": "电话 (中国大陆)",
    "contact.form_title": "给我留言 🎀",
    "contact.form_desc": "请留下您的联络信息与合作意向，我将在第一时间查收并回复。",
    "contact.label_fname": "您的姓氏 *",
    "contact.label_lname": "您的名字 *",
    "contact.label_email": "您的电子邮箱 *",
    "contact.label_phone": "联系电话",
    "contact.label_subject": "交流或合作主题",
    "contact.label_message": "详细留言内容 *",
    "contact.btn_submit": "提交留言 💌"
  },

  en: {
    // Nav & Common
    "nav.home": "Home",
    "nav.gallery": "Portfolio",
    "nav.resume": "Resume",
    "nav.contact": "Contact 💌",
    "brand.name": "Susan <span class=\"brand-script\">Chen</span>",
    "brand.subtitle": "NUS × University of Toronto · Portfolio",
    "lang.toggle_btn": "中文",

    // Footer
    "footer.brand_title": "Susan (Kefei) Chen 🌸",
    "footer.brand_desc": "Master of Communication at NUS · Honours Bachelor at University of Toronto.",
    "footer.nav_title": "Navigation",
    "footer.social_title": "Connect",
    "footer.bottom": "© 2026 Susan Chen · Portfolio 💖",

    // Home Hero
    "home.hero_name": "Susan Chen",
    "home.hero_subtitle": "Brand Strategy · Multimedia Creative Design · Digital Storytelling",
    "home.hero_bio": "Hello, I'm Susan (Kefei) Chen. Currently pursuing a <strong>Master of Communication at the National University of Singapore (NUS)</strong>, with an Honours Bachelor's degree from the <strong>University of Toronto</strong> (Double Major in CCIT & Art History).",
    "home.btn_projects": "View Projects 🎀",
    "home.btn_experience": "Experience & Honors 💼",
    "home.btn_contact": "Contact Me 💌",

    // Home Projects Section
    "home.proj_tag": "🎀 Selected Works",
    "home.proj_title": "Featured Projects & Case Studies",
    "home.proj_desc": "Encompassing luxury brand strategy, in-depth market research, generative AI short films, and human-centered digital UI/UX prototypes.",

    // Project 1: Maison Margiela
    "p1.badge": "🎀 L'Oréal Brandstorm",
    "p1.tag1": "Brand Strategy",
    "p1.tag2": "Luxury Marketing",
    "p1.tag3": "Fragrance Narrative",
    "p1.tag4": "Canva Deck",
    "p1.title": "Maison Margiela: Luxury Immersive Experience & Brand Strategy",
    "p1.desc": "A concept for L'Oréal Brandstorm, built around Maison Margiela's design language and fragrance line, with connected online and in-person brand experiences.",
    "p1.btn_canva": "Open Canva Pitch Deck ↗",
    "p1.btn_detail": "View Details",

    // Project 2: My Dorm Store
    "p2.badge": "🌸 Marketing Plan",
    "p2.tag1": "Marketing Funnel",
    "p2.tag2": "B2C Growth",
    "p2.tag3": "Brand 3V Framework",
    "p2.tag4": "Wix Prototype",
    "p2.title": "My Dorm Store: B2C Campus Lifestyle Brand Marketing Plan",
    "p2.desc": "Market research and a 2025 marketing plan for a dorm essentials brand aimed at Canadian university students, including audience profiles, ad budgets, and a Wix landing page redesign. The plan set targets of 20% sales growth and 30% brand awareness.",
    "p2.btn_pdf": "Read Full Report (PDF) ↗",
    "p2.btn_detail": "View Details",

    // Project 3: In Another Bloom
    "p3.badge": "✨ Original AI Short Film",
    "p3.tag1": "AIGC Directing",
    "p3.tag2": "Midjourney / Runway",
    "p3.tag3": "Original Score",
    "p3.tag4": "Storyboard",
    "p3.title": "In Another Bloom: Original AI Anime Concept Film",
    "p3.desc": "An AI animated short that I wrote and produced, exploring how to keep its scenes, visual style, and music coherent.",
    "p3.btn_yt": "Watch on YouTube ↗",
    "p3.btn_detail": "View Details",

    // Project 4: SSENSE UI/UX
    "p4.badge": "💖 UI/UX Experience Design",
    "p4.tag1": "Figma Prototype",
    "p4.tag2": "UX Audit",
    "p4.tag3": "Luxury E-Commerce",
    "p4.title": "SSENSE: Luxury E-Commerce Shopping Experience Redesign",
    "p4.desc": "Reviewed the SSENSE shopping flow and built a Figma redesign prototype, refining product browsing and checkout while keeping the site's minimal visual style.",
    "p4.btn_figma": "Open in Figma ↗",
    "p4.btn_detail": "View Details",

    // Experience Header
    "exp.tag": "💼 Career & Academic Highlights",
    "exp.title": "Work Experience & Education",
    "exp.desc": "Experience in overseas social media, brand visuals, and digital content projects.",

    "stat.s1_num": "Top 10%",
    "stat.s1_label": "🎓 U of T GPA 3.65 · Dean's List for 3 Consecutive Years",
    "stat.s2_num": "100k+",
    "stat.s2_label": "🚀 iQIYI Overseas Entertainment Viral Video Views",
    "stat.s3_num": "350+ Posts",
    "stat.s3_label": "📱 Monthly Multi-Channel Social Content Deployed",
    "stat.s4_num": "+23%",
    "stat.s4_label": "📈 Kuaikan Top IP Interactive Feature Engagement",

    // iQIYI
    "iqiyi.name": "iQIYI (Singapore · English Work Environment)",
    "iqiyi.role": "Overseas New Media Operations Intern",
    "iqiyi.date": "Aug 2026 – Present · Singapore",
    "iqiyi.b1": "<strong>Overseas Short Video Production:</strong> Handled video clipping and editing for 3 overseas entertainment accounts ('GuaGua Entertainment', 'Korean Wave Pursuit', 'Korean Variety Room'). Standardized cover designs, titles, and traditional Chinese subtitles; consistently produced <strong>120+ monthly clips</strong> (C-dramas, K-variety, K-pop), delivering <strong>10+ viral hits with over 100k views each</strong>.",
    "iqiyi.b2": "<strong>Omnichannel Scheduling & Distribution:</strong> Coordinated cross-departmental content needs and curated trending hashtags and BGM. Scheduled and published content across <strong>TikTok, YouTube, and Facebook</strong> with customized copy, deploying <strong>350+ content pieces per month</strong> for sustainable global reach.",

    // GoldPulse Media
    "gp.name": "GoldPulse Media (Canada)",
    "gp.role": "Brand Marketing Intern",
    "gp.date": "Sep 2025 – Apr 2026 · Canada",
    "gp.b1": "<strong>Brand Identity & Social Media Revamp:</strong> Formulated social visual identity for solproperties real estate, designing logo assets, stickers, and Instagram collateral. Post-launch content achieved <strong>3,000+ views per post, a +5% engagement rate lift, and +1,200 organic followers in 3 months</strong>.",
    "gp.b2": "<strong>Digital Marketing Campaigns:</strong> Conducted market research and competitor benchmarking for overseas real estate clients. Developed end-to-end marketing proposals and coordinated execution, successfully delivering <strong>3 high-impact client campaigns on schedule</strong>.",
    "gp.b3": "<strong>Data Diagnostics & Iterative Strategy:</strong> Analyzed engagement and conversion metrics to diagnose marketing performance, optimizing content hooks and release cadences to significantly boost video completion rates.",

    // Kuaikan
    "kk.name": "Beijing Kuaikan World Technology Co., Ltd.",
    "kk.role": "Content Operations Intern",
    "kk.date": "Apr 2025 – Jun 2025 · Beijing",
    "kk.b1": "<strong>Full-Cycle IP Operations:</strong> Spearheaded operations for <strong>8 comic series</strong> from positioning and topic curation to release scheduling and in-app asset management, driving a <strong>+16% increase in overall user dwell time</strong>.",
    "kk.b2": "<strong>Hit IP Visual Strategy:</strong> Key contributor to promotional packaging for flagship IP <em>Niang Niang Qiang</em>, redesigning cover creatives to reach fandom communities and securing <strong>40,000+ targeted core-audience impressions</strong>.",
    "kk.b3": "<strong>Interactive Experience Curation:</strong> Built character asset banks and customized immersive gameplay scenes for female demographic segments, boosting <strong>in-module user participation by +23%</strong>.",

    // Education Cards
    "edu.nus_title": "National University of Singapore (NUS)",
    "edu.nus_deg": "Master of Communication (Aug 2026 – Present)",
    "edu.nus_desc": "Specializing in strategic brand communication, digital media culture, and data-driven consumer insight methodologies.",
    "edu.uot_title": "University of Toronto",
    "edu.uot_deg": "Honours Bachelor of Arts in CCIT & Art History (Sep 2022 – Jun 2026)",
    "edu.uot_desc": "<strong>GPA 3.65/4.0 (Top 10% Graduate)</strong> · Awarded Dr. Annie Smith Travelling Scholarship and Admission Scholarship; <strong>Dean's List for 3 consecutive years</strong>.",
    "home.btn_view_resume": "View Full Resume & Skills ↗",

    // ================== Gallery ==================
    "gallery.hero_tag": "🎀 Selected Works · PORTFOLIO",
    "gallery.hero_title": "Creative Projects & <span>Works</span>",
    "gallery.hero_desc": "A curated collection of my work in brand strategy, market research, AI film production, and UX/UI design.",

    "gallery.sec1_tag": "🌸 Brand Consulting & Strategy",
    "gallery.sec1_title": "Brand Strategy & Market Research",
    "gallery.sec1_desc": "Includes a L'Oréal Brandstorm concept and research for a dorm essentials brand aimed at Canadian university students.",
    "gallery.btn_canva": "Open Canva Deck ↗",
    "gallery.pill_strategy": "Full Strategy Pitch",
    "gallery.btn_wix": "Visit Wix Site ↗",

    "gallery.sec2_tag": "✨ Emerging Media & Digital Art",
    "gallery.sec2_title": "Generative AI Concept Film",
    "gallery.sec2_desc": "Original anime concept work crafted with generative AI toolchains and digital filmmaking pipelines.",
    "gallery.film_director_tag": "✨ Solo Written & Directed",
    "gallery.film_title": "In Another Bloom",
    "gallery.film_sub": "Original AI Cinematic Anime Short · Full-Cycle Direction",
    "gallery.film_desc": "Written and produced independently by Susan Chen using generative AI for the visuals, with attention to continuity between characters, scenes, and music.",
    "gallery.btn_yt_watch": "Watch Full Video on YouTube ▶",
    "gallery.film_hd_pill": "1080P HD · Original Music",
    "gallery.card_yt_jump": "Watch on YouTube ↗",

    "gallery.sec3_tag": "💖 Digital Interaction & Experience",
    "gallery.sec3_title": "UI/UX Redesign & High-Fidelity Prototype",
    "gallery.sec3_desc": "A review of the SSENSE shopping experience and a redesign prototype made in Figma.",
    "gallery.ssense_tag": "Figma High-Fidelity Prototype",
    "gallery.ssense_title": "SSENSE: Luxury E-Commerce Shopping Experience Redesign",
    "gallery.ssense_desc": "The redesign adjusts product browsing and shopping while keeping SSENSE's simple visual style.",
    "gallery.btn_figma": "Open in Figma ↗",
    "gallery.btn_ssense_pdf": "View Design Specs (PDF) ↗",

    "gallery.sec4_tag": "🎨 Visual Communication & Editorial",
    "gallery.sec4_title": "Print Media & Editorial Publishing",
    "gallery.sec4_desc": "Fashion magazine layouts and printmaking projects completed at the University of Toronto.",
    "gallery.mag_tag": "InDesign Editorial Project",
    "gallery.mag_title": "Fashion Magazine Layout & Editorial Design",
    "gallery.mag_desc": "Magazine spreads designed in InDesign, emphasizing negative space and editorial pacing.",
    "gallery.btn_mag_pdf": "Full Screen Magazine PDF ↗",
    "gallery.book_hint": "✦ Hover over pages to unfold, inspect, and zoom ✦",
    "gallery.book_label": "🌸 Print Media & Art Series",

    // ================== Resume ==================
    "resume.hero_tag": "🎀 Curriculum Vitae · CV",
    "resume.hero_title": "Education & <span>Experience</span>",
    "resume.hero_desc": "Integrating global perspectives from NUS and U of T with proven experience in international streaming operations and brand marketing.",
    "resume.sidebar_title": "Master of Communication at NUS",
    "resume.sidebar_intro": "Passionate about crafting compelling brand narratives across multimedia channels, with expertise in global social media operations, brand strategy, AI video creation, and human-centered UX design.",
    "resume.btn_email": "✉ Email Susan",
    "resume.btn_linkedin": "LinkedIn Profile ↗",

    "resume.skills_title": "Skills & Technical Stack 🎀",
    "resume.skill_g1": "🌸 Brand & Marketing Strategy",
    "resume.skill_g2": "💖 Design Software & Digital Tools",
    "resume.skill_g3": "✨ Social Media & Generative AI",
    "resume.skill_g4": "🌐 Languages & Global Communication",

    "resume.work_header": "💼 Professional Experience",
    "resume.edu_header": "🎓 Education & Academic Honors",
    "resume.proj_header": "🎀 Competitions & Featured Case Studies",

    "resume.sk1_1": "Brand visual identity", "resume.sk1_2": "Marketing funnels", "resume.sk1_3": "Consumer research", "resume.sk1_4": "B2C growth", "resume.sk1_5": "Competitor analysis",
    "resume.sk2_1": "Figma prototyping", "resume.sk2_2": "UI / UX design", "resume.sk2_3": "Photoshop", "resume.sk2_4": "Illustrator", "resume.sk2_5": "InDesign", "resume.sk2_6": "Adobe XD", "resume.sk2_7": "Dreamweaver", "resume.sk2_8": "HTML / CSS", "resume.sk2_9": "R (RStudio)",
    "resume.sk3_1": "Short-form video editing", "resume.sk3_2": "Social media scheduling", "resume.sk3_3": "IP engagement concepts", "resume.sk3_4": "TikTok / YouTube / Facebook", "resume.sk3_5": "AI animated films",
    "resume.sk4_1": "English (IELTS 6.5; professional fluency)", "resume.sk4_2": "Mandarin Chinese (native)",
    "resume.edu_nus_title": "National University of Singapore (NUS)", "resume.edu_nus_deg": "Master of Communication · Strategic Communication", "resume.edu_nus_badge": "Aug 2026 – Present · Singapore 🇸🇬", "resume.edu_nus_desc": "Studies strategic brand communication, digital media, and consumer insights.",
    "resume.edu_uot_title": "University of Toronto", "resume.edu_uot_deg": "BA in CCIT & Art History", "resume.edu_uot_badge": "Sep 2022 – Jun 2026 · Canada 🇨🇦", "resume.edu_uot_desc": "<strong>GPA 3.65/4.0 (Top 10%)</strong> · Double major in Communication, Culture, Information and Technology and Art History.",
    "resume.edu_honor1": "🏆 Dean's List for three consecutive years", "resume.edu_honor2": "🏆 Dr. Annie Smith Travelling Scholarship", "resume.edu_honor3": "🏆 Entrance Scholarship",
    "resume.p1_title": "L'Oréal Brandstorm", "resume.p1_role": "Maison Margiela fragrance brand strategy", "resume.p1_badge": "Brand strategy competition 🎀", "resume.p1_desc": "Developed an omnichannel concept connecting Maison Margiela's brand story with digital and in-person experiences for Gen Z.",
    "resume.p2_title": "My Dorm Store campus marketing plan", "resume.p2_role": "Marketing strategy and research", "resume.p2_badge": "Brand research 🌸", "resume.p2_desc": "Created a market research plan and 2025 growth model, including a sales growth target of 20%, funnel budget, and Wix landing page redesign.",
    "resume.p3_title": "In Another Bloom · AI animated short", "resume.p3_role": "Independent director and visual creator", "resume.p3_badge": "Independent film ✨", "resume.p3_desc": "Wrote and produced the short, coordinating the script, AI prompts, character continuity, and sound and picture timing.",
    "resume.lead_header": "<span>🤝</span> Campus Leadership & Activities", "resume.lead1_title": "University of Toronto Chinese Students and Scholars Association", "resume.lead1_role": "Academic Affairs · Core Member", "resume.lead1_badge": "Student leadership", "resume.lead1_desc": "Helped organize academic seminars, course selection sessions, and peer support for new students.", "resume.lead2_title": "University of Toronto Chinese Students and Scholars Association", "resume.lead2_role": "Events · Planning Coordinator", "resume.lead2_badge": "Event planning", "resume.lead2_desc": "Coordinated teams, sponsors, and on-site operations for campus cultural events and the Mid-Autumn Festival celebration.",
    "resume.exp_iqiyi1": "<strong>Short-form video production:</strong> Edited clips for three overseas entertainment accounts and prepared covers, titles, and subtitles using a consistent visual template. Produced <strong>120+ clips per month</strong>, including <strong>10+ videos with over 100,000 views</strong>.",
    "resume.exp_iqiyi2": "<strong>Social media publishing:</strong> Prepared music, hashtags, and copy, then scheduled posts across <strong>TikTok, YouTube, and Facebook</strong>. Published <strong>350+ posts in one month</strong>, adapting copy and tags for each platform.",
    "resume.exp_gp1": "<strong>Brand identity:</strong> Planned visual assets for solproperties, including its logo, animated stickers, and social media graphics. After the redesign, posts received <strong>3,000+ views</strong>; engagement rose <strong>5%</strong> and the account gained <strong>1,200 followers in three months</strong>.",
    "resume.exp_gp2": "<strong>Campaign planning:</strong> Researched the overseas property market and competitors, helped develop campaign plans, and followed projects through delivery. Supported the on-time delivery of <strong>three client projects</strong>.",
    "resume.exp_gp3": "<strong>Performance analysis:</strong> Reviewed reach, engagement, and conversion data to identify areas for improvement and inform later content and publishing plans.",
    "resume.exp_kk1": "<strong>Content operations:</strong> Managed schedules and launch details for <strong>eight comics projects</strong>. Used performance data to adjust operations; average user time on projects rose <strong>16%</strong>.",
    "resume.exp_kk2": "<strong>IP promotion:</strong> Researched readers' preferences and proposed cover and page display updates for the popular title <em>Niang Niang Qiang</em>, generating <strong>40,000+ impressions</strong> among its core audience.",
    "resume.exp_kk3": "<strong>Interactive features:</strong> Developed character assets and fan activities for <em>Niang Niang Qiang</em>. The dedicated interactive module's participation rate increased <strong>23%</strong>.",

    // ================== Contact ==================
    "contact.hero_tag": "💌 Get in Touch · CONNECT",
    "contact.hero_title": "Let's <span>Connect</span>",
    "contact.hero_desc": "Whether for brand strategy inquiries, creative opportunities, or digital media collaboration, feel free to reach out anytime.",
    "contact.card_role": "Brand Strategist · Master of Communication at NUS",
    "contact.email_label1": "Personal Email",
    "contact.email_label2": "Academic Email (NUS)",
    "contact.wechat_label": "WeChat ID",
    "contact.phone_label": "Phone (China)",
    "contact.form_title": "Send a Message 🎀",
    "contact.form_desc": "Please leave your contact details and message below, and I will get back to you promptly.",
    "contact.label_fname": "Last Name *",
    "contact.label_lname": "First Name *",
    "contact.label_email": "Your Email *",
    "contact.label_phone": "Phone Number",
    "contact.label_subject": "Subject",
    "contact.label_message": "Message *",
    "contact.btn_submit": "Send Message 💌"
  }
};

/**
 * Get current active language (default 'zh')
 */
function getCurrentLanguage() {
  return localStorage.getItem('site_lang') || 'zh';
}

/**
 * Apply language translations to the page
 */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.zh;
  
  // Set html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update toggle button text
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    const btnText = toggleBtn.querySelector('.lang-text') || toggleBtn;
    btnText.textContent = lang === 'en' ? '中文' : 'EN';
    toggleBtn.setAttribute('title', lang === 'en' ? '切换为中文版' : 'Switch to English');
  }

  // Update body class for styling adjustments
  document.body.classList.remove('lang-zh', 'lang-en');
  document.body.classList.add('lang-' + lang);
}

/**
 * Toggle language between zh and en
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  const next = current === 'zh' ? 'en' : 'zh';
  localStorage.setItem('site_lang', next);
  applyTranslations(next);
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  }
});
