import blogImg1 from "@/assets/blog-instagram-recovery.jpg";
import blogImg2 from "@/assets/blog-instagram-suspended.jpg";
import blogImg3 from "@/assets/blog-security-tips.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-recover-disabled-instagram-account",
    title: "How to Recover a Disabled Instagram Account After Wrong ID",
    excerpt: "Learn the exact steps to take when your Instagram account gets disabled and you've submitted the wrong ID. Recovery is still possible if you follow these guidelines.",
    content: `## Why Instagram Disables Accounts After Wrong ID

Instagram's identity verification process is strict. When you submit an ID that doesn't match the name on your account, Instagram may permanently disable your account. This is one of the most common issues we handle at A-THI.

### Common Reasons for Disabled Accounts
- Submitting an ID with a different name than your account
- Using an expired identification document
- Blurry or unreadable photo of your ID
- Account flagged for suspicious activity before ID submission

### How We Help You Recover

At A-THI, we specialize in navigating Instagram's complex recovery process. Our team has successfully recovered thousands of accounts that were disabled due to ID verification issues.

**Step 1:** We analyze your specific situation and determine the best recovery approach.

**Step 2:** We prepare proper documentation and submit appeals through the right channels.

**Step 3:** We follow up consistently until your account is restored.

### Prevention Tips
- Always keep your account name matching your legal ID
- Enable two-factor authentication
- Keep backup codes saved securely
- Never share your login credentials

### Why Choose A-THI?
We offer a 50% deposit policy with a full refund guarantee if we can't recover your account. Our success rate speaks for itself — thousands of happy clients across Nigeria and worldwide.`,
    image: blogImg1,
    date: "2026-03-15",
    author: "A-THI Team",
    category: "Account Recovery",
  },
  {
    id: "2",
    slug: "why-instagram-accounts-get-suspended",
    title: "Why Instagram Accounts Get Suspended and How to Prevent It",
    excerpt: "Understand the common triggers that cause Instagram's automated systems to suspend accounts, and learn the best practices to keep your profile safe.",
    content: `## Understanding Instagram Suspensions

Instagram suspensions can happen to anyone — from personal users to businesses with thousands of followers. Understanding the triggers helps you protect your account.

### Top Reasons for Suspension

**1. Violating Community Guidelines**
Posting content that violates Instagram's terms of service, including hate speech, nudity, or violent content.

**2. Automated Activity**
Using bots, auto-followers, or mass DM tools that violate Instagram's automation policies.

**3. Rapid Following/Unfollowing**
Following and unfollowing hundreds of accounts in a short period signals bot behavior.

**4. Reported by Multiple Users**
If multiple users report your account, Instagram may temporarily or permanently suspend it.

**5. Phishing or Hacking**
If your account is compromised, hackers may use it for spam, leading to suspension.

### How to Protect Your Account
- Use strong, unique passwords
- Enable two-factor authentication
- Avoid third-party apps that require your password
- Don't buy followers or engagement
- Follow Instagram's community guidelines strictly

### Already Suspended?
If your account has been suspended, don't panic. A-THI has a proven track record of recovering suspended Instagram accounts. Contact us on WhatsApp for a free consultation.`,
    image: blogImg2,
    date: "2026-03-08",
    author: "A-THI Team",
    category: "Security Tips",
  },
  {
    id: "3",
    slug: "security-tips-after-account-recovery",
    title: "7 Security Tips to Protect Your Account After Recovery",
    excerpt: "Once your account is successfully recovered, it's crucial to lock it down. Follow these 7 essential security steps to ensure you never lose access again.",
    content: `## Securing Your Account After Recovery

Congratulations on getting your account back! Now it's time to make sure it stays secure. Here are the essential steps every account owner should take immediately after recovery.

### Immediate Steps

**1. Change Your Password**
Create a strong, unique password with at least 12 characters including uppercase, lowercase, numbers, and symbols.

**2. Enable Two-Factor Authentication**
This adds an extra layer of security. Use an authenticator app rather than SMS for better protection.

**3. Review Connected Apps**
Go to Settings > Security > Apps and Websites. Remove any apps you don't recognize or no longer use.

**4. Check Active Sessions**
Review all logged-in devices and log out of any you don't recognize.

**5. Update Recovery Email and Phone**
Make sure your recovery email and phone number are current and secure.

### Long-Term Security Practices
- Never click suspicious links in DMs or emails
- Don't share your password with anyone
- Use a password manager
- Regularly review your account activity
- Keep your email account equally secure
- Be cautious of "Instagram support" messages — they're usually scams

### A-THI's Post-Recovery Support
We don't just recover your account and disappear. A-THI provides post-recovery security guidance to ensure your account remains safe. Our Digital Vault service can securely store your recovery codes and important credentials.

Contact us anytime for security consultations.`,
    image: blogImg3,
    date: "2026-03-01",
    author: "A-THI Team",
    category: "Security Tips",
  },
];
