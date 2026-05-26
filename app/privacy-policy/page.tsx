import Cursor from "@/components/Cursor";
    
    export default function PrivacyPolicyPage() {
    const sections = [
        {
        title: "1. Information We Collect",
        content: (
            <>
            <p>
                We may collect certain information when you interact with our website
                or services, including:
            </p>

            <div style={{ marginTop: 20 }}>
                <h3 style={subHeadingStyle}>Personal Information</h3>
                <ul style={listStyle}>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business details</li>
                <li>Project inquiries or messages</li>
                </ul>
            </div>

            <div style={{ marginTop: 24 }}>
                <h3 style={subHeadingStyle}>Technical Information</h3>
                <ul style={listStyle}>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Website activity and analytics</li>
                </ul>
            </div>

            <p style={{ marginTop: 24 }}>
                This information helps us improve our services and provide a better
                user experience.
            </p>
            </>
        ),
        },

        {
        title: "2. How We Use Your Information",
        content: (
            <>
            <p>Davaris uses collected information to:</p>

            <ul style={listStyle}>
                <li>Respond to inquiries and project requests</li>
                <li>Provide digital services and support</li>
                <li>Improve website performance and user experience</li>
                <li>Communicate updates or important information</li>
                <li>Analyze website traffic and engagement</li>
                <li>Protect against fraud, abuse, or unauthorized activity</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                We only collect information necessary to operate and improve our
                services.
            </p>
            </>
        ),
        },

        {
        title: "3. Data Protection",
        content: (
            <p>
            We take reasonable security measures to protect your information from
            unauthorized access, misuse, or disclosure. While no digital platform
            can guarantee complete security, we continuously work to maintain safe
            systems and protect user data.
            </p>
        ),
        },

        {
        title: "4. Sharing of Information",
        content: (
            <>
            <p>
                Davaris does not sell, rent, or trade your personal information to
                third parties.
            </p>

            <p style={{ marginTop: 20 }}>
                We may share limited information only when necessary:
            </p>

            <ul style={listStyle}>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and services</li>
                <li>
                With trusted service providers assisting in website operations or
                project delivery
                </li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Any third-party partners are expected to maintain confidentiality and
                data protection standards.
            </p>
            </>
        ),
        },

        {
        title: "5. Cookies and Analytics",
        content: (
            <>
            <p>
                Our website may use cookies and analytics tools to understand visitor
                behavior and improve website performance.
            </p>

            <p style={{ marginTop: 20 }}>Cookies help us:</p>

            <ul style={listStyle}>
                <li>Remember preferences</li>
                <li>Improve loading performance</li>
                <li>Analyze traffic and engagement</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                You can disable cookies through your browser settings if preferred.
            </p>
            </>
        ),
        },

        {
        title: "6. Third-Party Links",
        content: (
            <>
            <p>
                Our website may contain links to third-party websites or platforms.
                Davaris is not responsible for the privacy practices or content of
                external websites.
            </p>

            <p style={{ marginTop: 24 }}>
                We encourage users to review the privacy policies of any third-party
                services they visit.
            </p>
            </>
        ),
        },

        {
        title: "7. Your Rights",
        content: (
            <>
            <p>Depending on your location, you may have the right to:</p>

            <ul style={listStyle}>
                <li>Request access to your data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of personal information</li>
                <li>Withdraw consent for communications</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Requests can be made through our contact channels.
            </p>
            </>
        ),
        },

        {
        title: "8. Changes to This Policy",
        content: (
            <>
            <p>
                Davaris may update this Privacy Policy from time to time to reflect
                changes in our services, technology, or legal requirements.
            </p>

            <p style={{ marginTop: 24 }}>
                Updated versions will be posted on this page with the revised date.
            </p>
            </>
        ),
        },

        {
        title: "9. Contact Us",
        content: (
            <>
            <p>
                If you have questions regarding this Privacy Policy or how your
                information is handled, you may contact us through our official
                communication channels.
            </p>

            <p style={{ marginTop: 24 }}>
                Davaris is committed to maintaining transparency, trust, and
                responsible data practices across all our digital services.
            </p>
            </>
        ),
        },
    ];

    return (
        <main
        style={{
            background: "var(--off-black)",
            minHeight: "100vh",
            color: "var(--white)",
            padding: "140px clamp(20px, 6vw, 80px) 100px",
        }}
        >
            <Cursor />
        <div
            style={{
            maxWidth: 900,
            margin: "0 auto",
            }}
        >
            {/* Label */}
            <div
            style={{
                fontFamily: "var(--font-ui)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 18,
            }}
            >
            Legal
            </div>

            {/* Heading */}
            <h1
            style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 9vw, 92px)",
                lineHeight: 0.95,
                fontWeight: 300,
                marginBottom: 24,
            }}
            >
            Privacy Policy
            </h1>

            {/* Updated */}
            <p
            style={{
                color: "var(--gold)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                marginBottom: 32,
            }}
            >
            Last Updated: May 2026
            </p>

            {/* Intro */}
            <p
            style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "15px",
                marginBottom: 24,
            }}
            >
            At Davaris io, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we collect,
            use, and safeguard information when you visit our website or use our
            services.
            </p>

            <p
            style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "15px",
                marginBottom: 60,
            }}
            >
            By accessing or using Davaris services, you agree to the terms outlined
            in this policy.
            </p>

            {/* Sections */}
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 50,
            }}
            >
            {sections.map((section) => (
                <section
                key={section.title}
                style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: 28,
                }}
                >
                <h2
                    style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 4vw, 38px)",
                    fontWeight: 300,
                    marginBottom: 18,
                    }}
                >
                    {section.title}
                </h2>

                <div
                    style={{
                    color: "var(--muted)",
                    lineHeight: 1.9,
                    fontSize: "15px",
                    }}
                >
                    {section.content}
                </div>
                </section>
            ))}
            </div>
        </div>
        </main>
    );
    }

    const listStyle: React.CSSProperties = {
    marginTop: 18,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    color: "var(--muted)",
    };

    const subHeadingStyle: React.CSSProperties = {
    fontFamily: "var(--font-ui)",
    fontSize: "12px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--gold)",
    marginBottom: 12,
    };