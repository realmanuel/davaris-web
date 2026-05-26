import Cursor from "@/components/Cursor";
    
    export default function TermsOfServicePage() {
    const sections = [
        {
        title: "1. About Davaris",
        content: (
            <>
            <p>
                Davaris is a digital solutions agency that provides services
                including:
            </p>

            <ul style={listStyle}>
                <li>Website development</li>
                <li>Mobile application development</li>
                <li>Branding and design</li>
                <li>Social media management</li>
                <li>Digital strategy and consulting</li>
                <li>Related digital solutions</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Our services are intended for businesses, brands, organizations, and
                individuals seeking digital growth and online presence solutions.
            </p>
            </>
        ),
        },

        {
        title: "2. Acceptance of Terms",
        content: (
            <>
            <p>
                By using our website or engaging our services, you confirm that:
            </p>

            <ul style={listStyle}>
                <li>You are legally able to enter agreements</li>
                <li>Information provided to Davaris is accurate</li>
                <li>
                You will not use our services for unlawful or harmful purposes
                </li>
            </ul>
            </>
        ),
        },

        {
        title: "3. Services and Project Scope",
        content: (
            <>
            <p>
                All projects and services provided by Davaris are based on agreed
                project terms, timelines, deliverables, and pricing.
            </p>

            <p style={{ marginTop: 24 }}>Project details may include:</p>

            <ul style={listStyle}>
                <li>Development scope</li>
                <li>Features and functionality</li>
                <li>Design requirements</li>
                <li>Delivery timeline</li>
                <li>Payment structure</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Any additional work outside the agreed scope may require separate
                approval and additional charges.
            </p>
            </>
        ),
        },

        {
        title: "4. Payments",
        content: (
            <>
            <p>
                Clients agree to make payments according to agreed invoices or
                project terms.
            </p>

            <div style={{ marginTop: 24 }}>
                <h3 style={subHeadingStyle}>Payment Terms</h3>

                <ul style={listStyle}>
                <li>Deposits may be required before work begins</li>
                <li>
                    Remaining balances must be paid according to agreed milestones
                </li>
                <li>Delayed payments may affect project timelines</li>
                <li>
                    Davaris reserves the right to pause services for unpaid balances
                </li>
                </ul>
            </div>

            <p style={{ marginTop: 24 }}>
                All payments made are non-refundable once work has commenced unless
                otherwise agreed in writing.
            </p>
            </>
        ),
        },

        {
        title: "5. Client Responsibilities",
        content: (
            <>
            <p>Clients are responsible for:</p>

            <ul style={listStyle}>
                <li>Providing accurate project information</li>
                <li>Supplying required materials and content</li>
                <li>Giving timely feedback and approvals</li>
                <li>Ensuring they own rights to submitted content</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Davaris is not responsible for delays caused by incomplete
                information or delayed client communication.
            </p>
            </>
        ),
        },

        {
        title: "6. Intellectual Property",
        content: (
            <>
            <p>Unless otherwise agreed:</p>

            <ul style={listStyle}>
                <li>
                Clients retain ownership of their brand assets and content
                </li>
                <li>
                Davaris retains ownership of internal frameworks, systems, code
                structures, and proprietary processes
                </li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Final project ownership may transfer after full payment has been
                completed.
            </p>

            <p style={{ marginTop: 24 }}>
                Davaris reserves the right to showcase completed work in portfolios,
                presentations, or promotional materials unless restricted by written
                agreement.
            </p>
            </>
        ),
        },

        {
        title: "7. Website and Service Usage",
        content: (
            <>
            <p>Users agree not to:</p>

            <ul style={listStyle}>
                <li>Attempt unauthorized access to systems</li>
                <li>Disrupt website functionality</li>
                <li>Upload malicious content</li>
                <li>
                Use Davaris services for fraudulent or illegal activity
                </li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Davaris reserves the right to restrict or terminate access for
                violations of these terms.
            </p>
            </>
        ),
        },

        {
        title: "8. Third-Party Services",
        content: (
            <>
            <p>
                Some services may involve third-party platforms, hosting providers,
                APIs, payment processors, or external tools.
            </p>

            <p style={{ marginTop: 24 }}>
                Davaris is not responsible for:
            </p>

            <ul style={listStyle}>
                <li>Third-party outages</li>
                <li>Platform policy changes</li>
                <li>External software limitations</li>
                <li>Actions of third-party providers</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Users may also be subject to third-party terms and policies.
            </p>
            </>
        ),
        },

        {
        title: "9. Limitation of Liability",
        content: (
            <>
            <p>Davaris will not be liable for:</p>

            <ul style={listStyle}>
                <li>Indirect or incidental damages</li>
                <li>Business losses or interruptions</li>
                <li>Data loss caused by external systems</li>
                <li>Delays outside reasonable control</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                While we strive to provide reliable services, all services are
                provided on an “as available” basis without guaranteed uninterrupted
                operation.
            </p>
            </>
        ),
        },

        {
        title: "10. Confidentiality",
        content: (
            <>
            <p>
                Davaris respects client confidentiality and will take reasonable
                steps to protect sensitive business information shared during
                projects.
            </p>

            <p style={{ marginTop: 24 }}>
                Both parties agree not to disclose confidential information without
                permission unless required by law.
            </p>
            </>
        ),
        },

        {
        title: "11. Termination",
        content: (
            <>
            <p>
                Davaris reserves the right to terminate or suspend services if:
            </p>

            <ul style={listStyle}>
                <li>Terms are violated</li>
                <li>Payments remain unpaid</li>
                <li>Fraudulent or abusive activity occurs</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                Clients may also terminate services through written notice, subject
                to any outstanding payments or completed work obligations.
            </p>
            </>
        ),
        },

        {
        title: "12. Changes to Terms",
        content: (
            <>
            <p>
                Davaris may update these Terms of Service from time to time.
                Continued use of our website or services after updates means you
                accept the revised terms.
            </p>

            <p style={{ marginTop: 24 }}>
                Updated versions will be posted with the latest revision date.
            </p>
            </>
        ),
        },

        {
        title: "13. Governing Law",
        content: (
            <p>
            These Terms shall be governed and interpreted in accordance with
            applicable laws and regulations within the jurisdiction where Davaris
            operates.
            </p>
        ),
        },

        {
        title: "14. Contact",
        content: (
            <>
            <p>
                For questions regarding these Terms of Service or our services,
                users may contact Davaris through our official communication
                channels.
            </p>

            <p style={{ marginTop: 24 }}>
                Davaris remains committed to professionalism, transparency, and
                delivering quality digital solutions to clients worldwide.
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
            Terms of Service
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
            Welcome to Davaris. These Terms of Service govern your access to and
            use of our website, products, and services. By accessing or using
            Davaris services, you agree to comply with these terms.
            </p>

            <p
            style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "15px",
                marginBottom: 60,
            }}
            >
            If you do not agree with these Terms, please do not use our services.
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