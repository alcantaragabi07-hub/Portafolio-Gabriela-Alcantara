// PROJECTS and SERVICES database arrays
const PROJECTS = [
  {
    id: 'project-1',
    title: 'Aura Collective',
    category: 'Brand Identity',
    year: '2023',
    description: 'Developing cohesive visual systems that define market presence and long-term brand equity.',
    role: 'Lead Art Director & Brand Strategist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFrE6nz-o6MRSSh_Zg3z7H2uX3OwyusIC9M4RoZ4DlXbBJnYxsjFGdKo_Kt8O-U5BxEk9ez6h1W-uJhQoEqK7wlL5D6XmfnMANDFQltdZahoT7FERpG2XfnZOjPX8WnoLt_m26B7JQYly6qIC9GSPlDcGgRe_YnQzytajaHvpq4RoA-BQ2c2v7oekC366tnv_TYX289APQLz6gqaAoiMuF6lpFrB5bw0PSTB34AvB8cSkevPoEKmB6vqe4KttRmBnU8nRSmXzgC2w',
    details: {
      client: 'Aura Artisanal Co.',
      challenge: 'Transform a traditional slow-luxury apothecary into a contemporary powerhouse capable of commanding premium boutique shelf spaces without losing their multi-generational tactile heritage.',
      solution: 'Developed an editorial identity guidelines system centered on absolute structural symmetry. Created tailored bespoke stationery, custom black cardboard textures, embossed gold filigree, and a digital visual layout grid that elevates the premium story of the raw ingredients.',
      gridSystem: 'Strict 12-column editorial catalog layout with asymmetrical margins.',
      typography: 'Syne Display & Editorial Garamond Book',
      colorPalette: ['#0A0A0A', '#E4DFDA', '#C3A05D', '#F2F2F2'],
      scope: ['Brand Guidelines & Blueprinting', 'Premium Stationery Collection', 'Digital Collateral', 'Macro Ingredient Photography Art Direction']
    }
  },
  {
    id: 'project-2',
    title: 'Vellure Skin',
    category: 'Packaging',
    year: '2024',
    description: 'Tactile premium experiences merging sustainability with high-end luxury cosmetics and retail glass.',
    role: 'Industrial Designer & Packaging Consultant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9i4x-e0cacYQdxrLHG5jHkP-O9v40BCZGxhTIo5qBSjkDmaRShHCIsYv8QJR-MOxvfOH6tIT9T9vAhCY5f2mODH28EWLVEyRcQ5JAbC8TmDtwxYDJOdJ2gK8zFVaWdwCm_Bwbsdp5Y-6TIZqt3Vo4H7RdG7ZJ6RU4ZCxKaUdImfz4_sYTv3JYmbaP9M6bZHaIISNTDp2izjBNNFdvtUQ4cY3ZlWXOzRpowNfPy6kyp5xEUKa-kUCks5dAzoyJqGR21wHAztzasDU',
    details: {
      client: 'Vellure Labs Paris',
      challenge: 'Create high-end cosmetics packaging that achieves zero-waste compostability while maintaining the heavy tactile weight and cold luxury feedback expected in premium department stores.',
      solution: 'Sourced bio-polymer marble-dust composite fibers for bottle caps, utilizing real recycled marble remnants, coupled with premium heavy-weight textured container paper. Embossed key informative data directly onto the organic matte bottles.',
      gridSystem: '3-dimensional packaging wrap layout and round die-cutting margins.',
      typography: 'Inter Tight Mono & Space Grotesk Bold',
      colorPalette: ['#ECEAE6', '#9C9286', '#131313', '#9DBDC5'],
      scope: ['3D CAD Prototyping', 'Sustainable Material Sourcing', 'Die-line Packaging Mockups', 'Unboxing Experience Direction']
    }
  },
  {
    id: 'project-3',
    title: 'Architrave Pro',
    category: 'Web & Digital',
    year: '2023',
    description: 'Responsive, typography-driven architectural portfolios and custom digital applications.',
    role: 'Lead UX Architect & Front-end Designer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJfunGwZKHa_oZ3U3MQehaLhni2gJIXilmdLAv-3TrS10zxmbs7pT0W9nnGWHEmd6eipOU7LN3cl3jvnEQx806wQpeQeYpS8u61X_cJQxswg9bGGJmps5P8I-DavB8ISyF0yEt2fk3aVLzQwR8W3-xpW0coOwQ-VN_QOjdUF_MwwW9FQlNfTRUASD36c-WK5Ua-FudrMzQghAq7LwGwrb_GUwBJzl4qiJzp6Hp7wbc_MnVktTBR2k7xi3ajBSBGrWIaRHMf8fLxdA',
    details: {
      client: 'Architrave Studio Architecture',
      challenge: 'High-end architectural portfolios require colossal high-definition layout ranges which often feel cluttered. The platform needed to respect blank canvas spaces while functioning fluidly across different mobile screen ratios.',
      solution: 'Designed and coded an interaction design schema with modular scroll physics, dynamic blueprints pan-and-viewer, and smooth zoom layouts mimicking physical blueprints tables.',
      gridSystem: 'Variable modular horizontal scrolling responsive grid.',
      typography: 'Neue Haas Grotesk Light & Mono-Spaced Courier',
      colorPalette: ['#050505', '#CCCCCC', '#222222', '#122588'],
      scope: ['UX Engineering & Wireframing', 'Interactive Blueprint Engine', 'Fluid Page Motion Engineering', 'Digital Brand Guidelines']
    }
  },
  {
    id: 'project-4',
    title: 'Ethereal Series',
    category: 'Illustration',
    year: '2022',
    description: 'Bespoke digital artwork capturing organic fluidity, kinetic textures, and abstract forms.',
    role: 'Digital Media Visual Artist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRh3eyUcv9Qw3u5kPAAs_kY41BH9stWrPtC2mCBxNv2oo3QAVIvugUNkeJfIEh85UTkaRNXeqMY65iOw7rpmga6r0hCLd7rniyQ7RPC70XYmVxcOWhCZMzHf9Dbgkx6_hhIkhYTcMfJJ1i1QCWBwsVK3pMGjEwgxsJZWySAfkh96wginiHEMOi7JmyKrZZRY8o6lfMK6vtrsQ69JYCyOs438VkT7tZWu4fw_Vdht0fVKDCXYsjVFFido66iIfvXm0eijKzQ7KWOc8',
    details: {
      client: 'Museum of Contemporary Kinetic Art',
      challenge: 'Produce immersive digital fluid sculptures that function beautifully as large atmospheric installations without causing screen burn-in or heavy rendering overhead.',
      solution: 'Configured a shader-based simulation of silk-textured viscous fluids. Captured fluid currents under varying color illumination and exported optimized slow-motion vector loops, paired with raw-grain ambient layers.',
      gridSystem: 'Dynamic physics-based particle arrangement.',
      typography: 'Syne ExtraBold & Editorial Mono Accent',
      colorPalette: ['#020412', '#0F16A5', '#2E35A5', '#EFEFEF'],
      scope: ['Dynamic Fluid Fields', 'High-Definition Projection Coding', 'Lighting Color Palette Design', 'Collectible Monolith Exhibition']
    }
  }
];

const SERVICES = [
  {
    id: 'service-1',
    title: 'Brand Identity',
    description: 'Developing cohesive visual structures that define true market presence, creating lasting resonance.',
    benefits: [
      'Bespoke, timeless logo systems and symbol design',
      'Exquisite responsive typography guidelines matching your niche',
      'Durable visual identity templates covering stationery, print & social media',
      'Art direction strategy to establish a high-end emotional prestige'
    ],
    process: [
      '1. Strategic Discovery & Core Values Triage',
      '2. Moodboards, Tone definitions & Typographic pair research',
      '3. Visual concepts sketch, refinement & mock layouts',
      '4. Delivery of robust brand ecosystem and digital assets guide'
    ]
  },
  {
    id: 'service-2',
    title: 'Packaging Design',
    description: 'Tactile, premium luxury layouts merging eco-conscious material science with sophisticated retail design.',
    benefits: [
      'Custom luxury boxes and cosmetic label engineering',
      'Strict emphasis on post-recycled heavy papers and premium textures',
      'Accurate geometric folding structures & high-end die-cuts',
      'Collaborations with sustainable boutique material vendors worldwide'
    ],
    process: [
      '1. Container Geometry & Material research',
      '2. Visual labeling, color palettes and finish tests (emboss/foil)',
      '3. Sourcing compostable and marble organic polymers',
      '4. Final manufacturing blueprints and close-up artwork files'
    ]
  },
  {
    id: 'service-3',
    title: 'Web & Digital',
    description: 'Responsive, fluid digital interfaces focused on ultra-minimalist navigation & high performance.',
    benefits: [
      'Beautiful user experience design honoring negative space and clarity',
      'Premium animations and transitions centered on guiding focus',
      'Responsive screens engineered with crisp typography scaling',
      'Modern interactive components (galleries, custom planners, viewers)'
    ],
    process: [
      '1. Visual Architecture, Flow maps & wire-diagram validation',
      '2. Figma-grade aesthetic interface screens mockups',
      '3. Interaction models, transitions & fine motion scripting',
      '4. Production code delivery or collaboration with developer teams'
    ]
  },
  {
    id: 'service-4',
    title: 'Bespoke Illustration',
    description: 'Custom organic textures, kinetic digital art, and bespoke drawings made for luxury applications.',
    benefits: [
      'Tailored custom wallpapers, liquid wave vectors, and premium line patterns',
      'High-resolution art compatible with large scale canvas installations',
      'Editorial graphic artworks for print covers and boutique merchandise'
    ],
    process: [
      '1. Theme analysis, scale definition, and tactile references exploration',
      '2. Silhouette blocking, light maps, and gradient system experiments',
      '3. High fidelity fine detailing & viscous kinetic texture generation',
      '4. High-resolution color-graded raster or vector delivery'
    ]
  }
];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  const projectGrid = document.getElementById('project-grid');
  const mobileMenuOpenBtn = document.getElementById('mobile-menu-open');
  const mobileDropdown = document.getElementById('mobile-dropdown');
  
  // Drawer Elements
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const projectDrawer = document.getElementById('project-drawer');
  const trackerDrawer = document.getElementById('tracker-drawer');
  
  // Form elements
  const plannerForm = document.getElementById('planner-form');
  const plannerFormContainer = document.getElementById('planner-form-container');
  const formSuccessContainer = document.getElementById('form-success-container');
  
  const inputFullName = document.getElementById('form-fullname');
  const inputEmail = document.getElementById('form-email');
  const textareaMessage = document.getElementById('form-message');
  
  // Inquiry Alignment Hub Desk elements
  const deskCounterBtn = document.getElementById('desk-counter-btn');
  const deskCounterBtnMobile = document.getElementById('desk-counter-btn-mobile');
  const deskCountLabels = document.querySelectorAll('.desk-count');
  const inquiriesListContainer = document.getElementById('inquiries-list-container');
  
  // State variables
  let submittedInquiries = [];

  // Initialize inquiries desk with a default mock if empty
  const savedInquiries = localStorage.getItem('gabriela_inquiries');
  if (savedInquiries) {
    try {
      submittedInquiries = JSON.parse(savedInquiries);
    } catch (e) {
      console.error(e);
    }
  } else {
    const initialMock = {
      id: 'inq-initial',
      fullName: 'Alexander Vane',
      email: 'vane@aperture-atelier.com',
      serviceType: 'Brand Identity',
      budget: '$15,000 – $30,000',
      timeline: '2 – 3 Months',
      message: 'Looking to craft a timeless architectural brand concept for our European flagship locations. We felt in love with the Aura Collective execution and layout.',
      status: 'In Review',
      date: '2026-05-28',
      comment: 'Gabriela loved this pitch! Currently coordinating a video kickoff call.'
    };
    submittedInquiries = [initialMock];
    localStorage.setItem('gabriela_inquiries', JSON.stringify(submittedInquiries));
  }
  updateInquiryCountUI();

  // Load draft values from localStorage
  inputFullName.value = localStorage.getItem('gabriela_form_fullName') || '';
  inputEmail.value = localStorage.getItem('gabriela_form_email') || '';
  textareaMessage.value = localStorage.getItem('gabriela_form_message') || '';



  // 2. MOBILE MENU DROPDOWN TOGGLE
  if (mobileMenuOpenBtn) {
    mobileMenuOpenBtn.addEventListener('click', () => {
      const isOpen = mobileDropdown.classList.toggle('open');
      mobileMenuOpenBtn.innerHTML = isOpen 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    mobileDropdown.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.remove('open');
        mobileMenuOpenBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // 3. RENDER PORTFOLIO PROJECTS
  function renderProjects() {
    if (!projectGrid) return;
    
    projectGrid.innerHTML = PROJECTS.map((project, idx) => {
      const mdColSpan = idx % 3 === 0 ? 'col-span-8' : 'col-span-4';
      const aspectClass = idx % 3 === 0 ? 'aspect-wide' : 'aspect-tall';
      
      return `
        <div class="project-card ${mdColSpan}" data-id="${project.id}">
          <div class="img-wrapper ${aspectClass}">
            <div class="overlay"></div>
            <img src="${project.image}" alt="${project.title}" referrerpolicy="no-referrer" loading="lazy" />
            <div class="project-banner">
              <div>
                <span class="project-category">${project.category}</span>
                <h3 class="project-card-title">${project.title}</h3>
              </div>
              <div class="arrow-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
            <div class="year-tag">${project.year}</div>
          </div>
        </div>
      `;
    }).join('');

    // Rebind drawer open events
    projectGrid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const proj = PROJECTS.find(p => p.id === id);
        if (proj) openProjectDrawer(proj);
      });
    });
  }
  renderProjects();

  // 4. PROJECT DETAIL DRAWER
  function openProjectDrawer(proj) {
    if (!projectDrawer) return;
    
    const scopeHtml = proj.details.scope.map((item, idx) => `
      <div class="deliverable-item">
        <span class="deliverable-num">0${idx + 1}.</span>
        <span class="deliverable-text">${item}</span>
      </div>
    `).join('');

    const swatchesHtml = proj.details.colorPalette.map(color => `
      <button class="swatch-item" data-hex="${color}">
        <div class="swatch-color" style="background-color: ${color}"></div>
        <span class="swatch-hex">${color}</span>
        <span class="swatch-copy-hover">Copy</span>
      </button>
    `).join('');

    projectDrawer.innerHTML = `
      <div class="drawer-header">
        <button class="drawer-close-btn" id="project-drawer-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Gallery
        </button>
        <div class="drawer-header-meta">
          <span class="drawer-header-cat">${proj.category}</span>
          <p class="drawer-header-year">${proj.year} © GA</p>
        </div>
      </div>
      
      <div class="drawer-body">
        <div class="drawer-hero">
          <img src="${proj.image}" alt="${proj.title}" referrerpolicy="no-referrer" />
          <div class="drawer-hero-overlay"></div>
          <div class="drawer-hero-text">
            <h3 class="drawer-hero-title">${proj.title}</h3>
            <p class="drawer-hero-client">Client: ${proj.details.client}</p>
          </div>
        </div>

        <div class="drawer-stats-row">
          <div class="drawer-stat-item">
            <label>Role / Duty</label>
            <p>${proj.role}</p>
          </div>
          <div class="drawer-stat-item">
            <label>Year</label>
            <p>${proj.year}</p>
          </div>
          <div class="drawer-stat-item">
            <label>Grid Blueprint</label>
            <p>${proj.details.gridSystem}</p>
          </div>
          <div class="drawer-stat-item">
            <label>Primary Typeface</label>
            <p class="italic">${proj.details.typography}</p>
          </div>
        </div>

        <div class="drawer-challenge-solution">
          <div class="drawer-block">
            <div class="drawer-block-title color-accent-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              The Challenge
            </div>
            <p class="drawer-block-desc">${proj.details.challenge}</p>
          </div>

          <div class="drawer-block">
            <div class="drawer-block-title color-emerald-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              The Architectural Solution
            </div>
            <p class="drawer-block-desc">${proj.details.solution}</p>
          </div>
        </div>

        <div class="swatches-container">
          <span class="swatches-title">Obsidian Noir Palette & Colors (Tap Swatch to Copy)</span>
          <div class="swatches-grid">
            ${swatchesHtml}
          </div>
        </div>

        <div class="drawer-block">
          <span class="swatches-title">Execution Scope & Output Deliverables</span>
          <div class="deliverables-grid">
            ${scopeHtml}
          </div>
        </div>

        <div class="drawer-footer">
          <p>Like this minimal approach? Start a conversation for a similar study.</p>
          <a href="#contact" class="btn-drawer-cta" id="drawer-cta-btn">Discuss this Project</a>
        </div>
      </div>
    `;

    // Bind Swatch Clipboard Copy actions
    projectDrawer.querySelectorAll('.swatch-item').forEach(swatch => {
      swatch.addEventListener('click', () => {
        const hex = swatch.getAttribute('data-hex');
        navigator.clipboard.writeText(hex).then(() => {
          const statusSpan = swatch.querySelector('.swatch-copy-hover');
          statusSpan.textContent = 'Copied!';
          statusSpan.style.color = 'var(--color-emerald)';
          statusSpan.style.opacity = '1';
          setTimeout(() => {
            statusSpan.textContent = 'Copy';
            statusSpan.style.color = '';
            statusSpan.style.opacity = '';
          }, 2000);
        });
      });
    });

    const closeBtn = projectDrawer.querySelector('#project-drawer-close');
    closeBtn.addEventListener('click', closeAllDrawers);

    const ctaBtn = projectDrawer.querySelector('#drawer-cta-btn');
    ctaBtn.addEventListener('click', () => {
      closeAllDrawers();
    });

    drawerBackdrop.classList.add('active');
    projectDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';

  }

  // Close drawers helper
  function closeAllDrawers() {
    drawerBackdrop.classList.remove('active');
    projectDrawer.classList.remove('active');
    trackerDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  drawerBackdrop.addEventListener('click', closeAllDrawers);

  // 5. PLANNER FORM BINDING & SAVING
  const handleInputChange = (key, element) => {
    element.addEventListener('input', () => {
      localStorage.setItem(`gabriela_form_${key}`, element.value);
    });
  };

  handleInputChange('fullName', inputFullName);
  handleInputChange('email', inputEmail);
  handleInputChange('message', textareaMessage);

  // Form Submit handler
  if (plannerForm) {
    plannerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const fullName = inputFullName.value;
      const email = inputEmail.value;
      const message = textareaMessage.value;
      
      if (!fullName || !email || !message) return;

      // Create new inquiry object
      const newInquiry = {
        id: `inq-${Date.now()}`,
        fullName,
        email,
        message,
        serviceType: 'Selected Inquiries Desk',
        budget: 'Custom Zone Scale',
        timeline: 'Launch Target Cycle',
        status: 'Received',
        date: new Date().toISOString().split('T')[0]
      };

      submittedInquiries = [newInquiry, ...submittedInquiries];
      localStorage.setItem('gabriela_inquiries', JSON.stringify(submittedInquiries));
      updateInquiryCountUI();

      // Show success view receipt details
      renderSuccessReceipt(newInquiry);
      plannerFormContainer.style.display = 'none';
      formSuccessContainer.style.display = 'block';

      // Schedule simulation: status shift after 15 seconds
      setTimeout(() => {
        submittedInquiries = submittedInquiries.map(item => {
          if (item.id === newInquiry.id) {
            return {
              ...item,
              status: 'In Review',
              comment: 'Inquiry is currently being reviewed by Gabriela. Estimated alignment response within 24 hours.'
            };
          }
          return item;
        });
        localStorage.setItem('gabriela_inquiries', JSON.stringify(submittedInquiries));
        renderInquiriesTrackerList();
      }, 15000);
    });
  }

  // Success view helper
  function renderSuccessReceipt(inq) {
    const receiptBox = formSuccessContainer.querySelector('.receipt-box');
    receiptBox.innerHTML = `
      <div class="receipt-item"><span>CLIENT:</span> ${inq.fullName}</div>
      <div class="receipt-item"><span>SERVICE TYPE:</span> ${inq.serviceType}</div>
      <div class="receipt-item"><span>QUEUE POSITION:</span> #0${submittedInquiries.length}</div>
    `;

    const trackBtn = formSuccessContainer.querySelector('#btn-success-track');
    trackBtn.onclick = () => {
      openTrackerDrawer();
    };

    const resetBtn = formSuccessContainer.querySelector('#btn-success-reset');
    resetBtn.onclick = () => {
      inputFullName.value = '';
      inputEmail.value = '';
      textareaMessage.value = '';
      
      localStorage.removeItem('gabriela_form_fullName');
      localStorage.removeItem('gabriela_form_email');
      localStorage.removeItem('gabriela_form_message');

      formSuccessContainer.style.display = 'none';
      plannerFormContainer.style.display = 'block';
    };
  }

  // 6. INQUIRY ALIGNMENT HUB DESK
  function openTrackerDrawer() {
    renderInquiriesTrackerList();
    drawerBackdrop.classList.add('active');
    trackerDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (deskCounterBtn) deskCounterBtn.addEventListener('click', openTrackerDrawer);
  if (deskCounterBtnMobile) deskCounterBtnMobile.addEventListener('click', openTrackerDrawer);

  const trackerCloseBtn = document.getElementById('tracker-drawer-close');
  if (trackerCloseBtn) trackerCloseBtn.addEventListener('click', closeAllDrawers);

  // Render tracker inquiries list
  function renderInquiriesTrackerList() {
    if (!inquiriesListContainer) return;

    if (submittedInquiries.length === 0) {
      inquiriesListContainer.innerHTML = `
        <div class="tracker-empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <p class="tracker-empty-title">No inquiries in queue</p>
          <p class="tracker-empty-sub">Fill out the project planner to interact.</p>
        </div>
      `;
      return;
    }

    inquiriesListContainer.innerHTML = submittedInquiries.map(inq => {
      let statusClass = 'received';
      if (inq.status === 'In Review') statusClass = 'in-review';
      if (inq.status === 'Accepted') statusClass = 'accepted';

      const commentHtml = inq.comment 
        ? `<div class="inquiry-comment-box"><strong>Note: </strong> ${inq.comment}</div>` 
        : '';

      return `
        <div class="inquiry-card">
          <div class="inquiry-card-header">
            <div>
              <h4 class="inquiry-client-name">${inq.fullName}</h4>
              <p class="inquiry-client-email">${inq.email}</p>
            </div>
            <span class="status-tag ${statusClass}">${inq.status}</span>
          </div>

          <div class="inquiry-message-box">
            <p class="inquiry-message-text">"${inq.message}"</p>
          </div>

          ${commentHtml}

          <button class="inquiry-delete-btn" data-id="${inq.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            Remove
          </button>
        </div>
      `;
    }).join('');

    // Bind delete inquiry click handlers
    inquiriesListContainer.querySelectorAll('.inquiry-delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        submittedInquiries = submittedInquiries.filter(item => item.id !== id);
        localStorage.setItem('gabriela_inquiries', JSON.stringify(submittedInquiries));
        updateInquiryCountUI();
        renderInquiriesTrackerList();
      });
    });

  }

  function updateInquiryCountUI() {
    deskCountLabels.forEach(label => {
      label.textContent = submittedInquiries.length;
    });
  }
});
