import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Course {
  id: string;
  title: string;
  category: 'core' | 'systems' | 'math';
  description: string;
  duration: string;
  modules: number;
  slots: number;
  icon: string;
}

interface Package {
  name: string;
  price: string;
  slots: string;
  features: string[];
  isPopular?: boolean;
}

interface TabOption {
  id: string;
  label: string;
  title: string;
  description: string;
  imageAlt: string;
  bulletPoints: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  // Category filtering for the catalog grid
  selectedCategory = signal<string>('all');
  
  // Tab control state for the "AI-based Solutions" segment
  activeTab = signal<string>('students');
  
  // Magic Mentor AI doubts resolver simulation state
  mentorMessage = signal<string>('Click one of the student queries on the left to see me compile, run, and resolve it instantly.');
  mentorCode = signal<string>('');
  activeQuestionId = signal<number | null>(null);

  // High-fidelity tab content
  tabsList: TabOption[] = [
    {
      id: 'students',
      label: 'For Students',
      title: 'Personalized Content for Conceptual Mastery',
      description: 'Never get stuck on difficult theory. Seamlessly learn through visualized modules, execute code snippets directly in your browser, and get instant doubt assistance.',
      imageAlt: 'Student studying representation',
      bulletPoints: [
        'Syllabus-Aligned Learning Paths',
        'Interactive Code Compilation sandboxes',
        'Short micro-learning segments with checkpoints',
        'Direct 24/7 access to Magic Mentor AI'
      ]
    },
    {
      id: 'colleges',
      label: 'For College Admins & Faculty',
      title: 'Digitally Transform Schooling & Lectures',
      description: 'Equip your instructors with state-of-the-art visual presentation tools. Track batch analytics, automate student assessments, and sync courses directly with your university guidelines.',
      imageAlt: 'College classroom dashboard mockup',
      bulletPoints: [
        'Centralized student analytics and learning graphs',
        'Automated offline/online exam paper creators',
        'High-fidelity presentation slides and 3D graphs',
        'Cohesive LMS integrations and grading tables'
      ]
    },
    {
      id: 'mentors',
      label: 'For Private Tutors & Mentors',
      title: 'Scale and Personalize Student Coaching',
      description: 'Organize your tutoring batches, design comprehensive test series, and get real-time performance insights to provide hyper-targeted feedback to students.',
      imageAlt: 'Private coaching insights interface',
      bulletPoints: [
        'Individual growth trackers and error lists',
        'Quick template worksheets sharing options',
        'Automated progress report cards builder',
        'Flexible learning schedules and slots control'
      ]
    }
  ];

  courses: Course[] = [
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      category: 'core',
      description: 'Master arrays, lists, trees, and graphs with active visualizers and dynamic code checks.',
      duration: '40 Hours',
      modules: 12,
      slots: 1,
      icon: 'hub'
    },
    {
      id: 'cn',
      title: 'Computer Networks',
      category: 'systems',
      description: 'Dive deep into OSI layers, routing protocols, TCP/IP, sockets, and network packet simulation.',
      duration: '32 Hours',
      modules: 10,
      slots: 1,
      icon: 'lan'
    },
    {
      id: 'os',
      title: 'Operating Systems',
      category: 'systems',
      description: 'Understand process scheduling, deadlocks, memory management, and virtual file structures.',
      duration: '35 Hours',
      modules: 9,
      slots: 1,
      icon: 'developer_board'
    },
    {
      id: 'dbms',
      title: 'Database Management Systems',
      category: 'core',
      description: 'Learn relational algebra, advanced SQL, query tuning, normalization, and ACID properties.',
      duration: '30 Hours',
      modules: 8,
      slots: 1,
      icon: 'database'
    },
    {
      id: 'math',
      title: 'Engineering Mathematics',
      category: 'math',
      description: 'Clear foundation in linear algebra, calculus, matrices, probability, and numerical methods.',
      duration: '45 Hours',
      modules: 15,
      slots: 1,
      icon: 'calculate'
    },
    {
      id: 'toc',
      title: 'Theory of Computation',
      category: 'core',
      description: 'Deconstruct finite automata, regular grammar, context-free languages, and Turing machines.',
      duration: '28 Hours',
      modules: 7,
      slots: 1,
      icon: 'schema'
    }
  ];

  packages: Package[] = [
    {
      name: 'Starter Plan',
      price: '₹499',
      slots: '1 Active Course Slot',
      features: [
        'Access to any 1 course at a time',
        'Basic progress reports',
        'Standard doubt support'
      ]
    },
    {
      name: 'Pro Semester Plan',
      price: '₹1,199',
      slots: '3 Active Course Slots',
      features: [
        'Enroll in 3 courses concurrently',
        'Priority Magic Mentor queries',
        'Practice checkpoint quizzes',
        'Syllabus matching tool'
      ],
      isPopular: true
    },
    {
      name: 'Unlimited Pass',
      price: '₹1,999',
      slots: 'Unlimited Enrollment Slots',
      features: [
        'Full catalog unrestricted access',
        '24/7 Unlimited Magic Mentor queries',
        'Verified Course Certificates',
        'Direct coding sandbox access',
        'Offline mock exam sheets'
      ]
    }
  ];

  sampleDoubts = [
    {
      id: 1,
      question: 'Explain recursion in simple terms.',
      answer: 'Recursion is like when you take a selfie of yourself taking a selfie. In programming, a function solves a problem by calling a smaller copy of itself until it hits a "base case" (where it stops). Without a basecase, you get a Stack Overflow!',
      code: `// Simple factorial recursion\nint factorial(int n) {\n  if (n <= 1) return 1; // Base case\n  return n * factorial(n - 1); // Recursive call\n}`
    },
    {
      id: 2,
      question: 'How does TCP 3-way handshake work?',
      answer: 'It is like setting up a phone call:\n1. SYN: Client sends a message saying "Hey, can you hear me?"\n2. SYN-ACK: Server hears and replies "Yes, I hear you! Can you hear me?"\n3. ACK: Client replies "Yes, loud and clear!" Connection established.',
      code: `Client             Server\n  |--- SYN --------->|\n  |<-- SYN-ACK ------|\n  |--- ACK --------->|`
    },
    {
      id: 3,
      question: 'Solve derivative of x^2 sin(x).',
      answer: 'Using the Product Rule: d/dx [u * v] = u\'v + uv\'\nLet u = x^2 (so u\' = 2x)\nLet v = sin(x) (so v\' = cos(x))\n\nResult:\nd/dx [x^2 sin(x)] = 2x sin(x) + x^2 cos(x)',
      code: `f'(x) = 2x * sin(x) + x^2 * cos(x)`
    }
  ];

  filterCourses(): Course[] {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.courses;
    }
    return this.courses.filter(c => c.category === category);
  }

  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  setTab(tabId: string): void {
    this.activeTab.set(tabId);
  }

  getActiveTabContent(): TabOption {
    const activeId = this.activeTab();
    return this.tabsList.find(t => t.id === activeId) || this.tabsList[0];
  }

  askMentor(questionId: number): void {
    const doubt = this.sampleDoubts.find(d => d.id === questionId);
    if (doubt) {
      this.activeQuestionId.set(questionId);
      this.mentorMessage.set(doubt.answer);
      this.mentorCode.set(doubt.code);
    }
  }
}
