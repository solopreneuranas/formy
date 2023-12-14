import * as React from 'react';
import '../App.css';
import CTA from './CTA';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import TopBar from './TopBar';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Privacy(props) {
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <TopBar color='white' background='linear-gradient(to right, blue 30%, #8000ff 70%)' linkColor='gainsboro' />
            <Header bg='white' color='black' logo='boosty-gradient-logo.svg' border='2px solid black' buttonBg='linear-gradient(to right, blue, #8000ff)' buttonColor='white' />

            <Grid container spacing={1} style={{ marginTop: '4%' }}>
                <Grid item xs={12} style={{ background: 'linear-gradient(to right, blue 30%, #8000ff 70%)', padding: '6%' }}>
                    <h2 className='featuresHeading' style={{ color: 'white', margin: 0 }}>Privacy and Refund</h2>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{ margin: '3% 0', padding: matches_md ? '0' : '0 10%', textAlign: 'justify' }}>
                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%' }}>
                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 20, fontWeight: 600 }}>
                        PLEASE READ THIS LEGAL DISCLAIMER AND TERMS OF SERVICE CAREFULLY BEFORE ACCESSING OUR WEBSITE OR USING OUR SERVICES <br /><br />

                        A visitor to the Website (as defined below), current Customer (as defined below) or prospective Customer is subject to this Legal Disclaimer and Terms of Service (“Terms”), as set forth below.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>You and Us</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Welcome to Boosty Formation. Formally, we are tryboosty.com. We provide our services (“Services”) online, including via our website at www.tryboosty.com or any website owned by Boosty (collectively the “Website”), and other forms of communications such as email. Providing information on the Website also constitutes part of the Services.

                        We use the term “User” or “you” or “your” or “Visitor” or “Customer” to mean any past, current, or prospective customer of our Services as well as any visitor to the Website. These Terms apply to each Customer. There will be no fees for Customers to use the Services unless stated explicitly in these Terms or in other notices from Boosty to Customers such as information on the Website.

                        These Terms govern your access to and use of our Services. By accessing or using the Services (including accessing the Website), you agree to be bound by these Terms as if these Terms were signed by you in ink on a hard-copy agreement. We may also ask you to confirm that you agree to these Terms, including by taking particular actions, such as clicking a button labelled “I Agree” or “Buy Now” or using the Services. Any personally-identifiable information about you or anyone else may be stored on or through the Services (“Personal Data”). So long as you are a Customer, Boosty Formation hereby grants you permission to use the software (“Software”) included in the Website as part of the Services. Your right to use the Software is revocable by Boosty Formation, and is not sublicensable. Moreover, the Software must be used solely for personal use by you.

                        The information provided in the Website or via any other means of transmission from Boosty is not legal advice, but general information. The content contained on the Website or information contained in any other transmission from Boosty is subject to these Terms.

                        Boosty reserves the right to change or update these Terms at any time. Changes or updates of these Terms will appear on the Website and/or be communicated to Customer and are effective immediately. Use of the Website or receipt of Services after any such changes constitutes your consent to such changes and updates.

                        We provide services to you subject to the notices, terms, and conditions set forth in this agreement. Besides, you will obey the rules, guidelines, policies, terms, and conditions applicable to such services before you use them. We reserve the right to change this site and these terms and conditions at any time.

                        Before proceeding, please read this agreement because accessing, browsing, or otherwise using the Site indicates your agreement to all the terms and conditions in this agreement.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Informational Purposes Only</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        The purpose and intent of Boosty Formation are to provide you with general information, and not to provide any specific advice (legal or otherwise). The information presented is provided solely for informational purposes and constitutes an advertisement for services. Boosty does not wish to represent anyone desiring legal representation based upon viewing the Website or information provided via email, facsimile, phone conversation, or any other form of transmission. Visitors or recipients of this information should not act upon this information without consulting with legal counsel. None of the information on the Website constitutes professional or legal advice or a recommendation by Boosty, its representatives, agents, or otherwise. Boosty operates exclusively at Customer’s direction and does not offer legal, tax or accounting advice or services, and no information provided by Boosty constitutes legal, tax, or accounting advice.

                        The transmission and receipt of materials provided by Boosty is not intended to and does not create an attorney-client relationship. Also, providing any of the information made available at the Website or via other forms of transmission does not create a business, legal, or professional relationship.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Content</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>

                        You shall not upload, distribute, or otherwise publish through this Site any Content, information, or other material that (a) includes any bugs, viruses, worms, trap doors, Trojan horses, or other harmful code or properties; (b) is libelous, threatening, defamatory, obscene, indecent, pornographic, discriminatory, or could give rise to any civil or criminal liability under the laws of the U.S. or the laws of any other country that may apply; or (c)violates or infringes upon the copyrights, patents, trademarks, service marks, trade secrets, or other proprietary rights of any person. tryboosty.com may give you an account identification and password to enable you to access and use certain portions of this Site. Each time you use a password or identification, you are deemed to be authorized to access and use the Site in a manner consistent with the terms and conditions of this agreement, and tryboosty.com has no obligation to investigate the source of any such access or use of the Site.

                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Minimum age</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        By accepting these Terms of Use through your use of the Site, you certify that you are 18 years of age or older. If you are under 18 years old please use this Site only under the supervision of a parent or legal guardian. Subject to the terms and conditions of this agreement, hereby grants you a limited, revocable, non-transferable, and non-exclusive license to access and use the Site by displaying it on your Internet browser only for the purpose of shopping and not for any commercial use or use on behalf of any third party, except as explicitly permitted by tryboosty.com in advance. Any violation of this Agreement shall result in the immediate revocation of the license granted in this paragraph without notice to you.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Privacy</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Unless explicitly permitted by our company in advance, all materials, including images, text, illustrations, designs, icons, photographs, programs, music clips or downloads, video clips and written and other materials that are part of this Site (collectively, the “Contents”) are intended solely for personal, non-commercial use. You may not make any commercial use of any of the information provided on the Site or make any use of the Site for the benefit of another business. We reserve the right to refuse service, terminate accounts, and/or cancel orders in its discretion, including, without limitation, if we believe that customer conduct violates applicable laws or is harmful to our interests. You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit this Site or any portion of it unless expressly permitted by our company in writing.

                        You will be solely responsible for all access to and use of this site by anyone using the password and identification originally assigned to you whether or not such access to and use of this site is actually authorized by you, including without limitation, all communications and transmissions and all obligations (including without limitation financial obligations) incurred through such access or use. You are solely responsible for protecting the security and confidentiality of the password and identification assigned to you. You shall immediately notify tryboosty.com of any unauthorized use of your password or identification or any other breach or threatened breach of this Site’s security.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Third-Party Sites</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        The Website contains links to servers maintained by other businesses and organizations, which exist independently from Boosty Formation or the Website. Boosty cannot provide any warranty about the accuracy or source of the information contained on any of these servers or the content of any file a Customer might download from these sites. No such third party is endorsed or recommended by us by virtue of the fact that links to their servers appear on the Website. All accessing and downloading of material from such third party sites is at the Customer's own risk, for which Boosty is not responsible or liable in any way.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0, fontSize: 30, textTransform: 'uppercase' }}>All third party information is provided without any warranty, express or implied, as to its legal effect and completeness.</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        For the avoidance of doubt, all charges imposed by such third parties- including but not limited to auto-renew fees for registered agents and/or any other services- cannot be reversed, discounted, or in any way altered after those charges have been applied to your account.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Disclaimer of Warranties</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        To the fullest extent permissible under applicable law, we disclaim any and all implied warranties and representations, including, without limitation, any warranties of merchantability, fitness for a particular purpose, title, and non-infringement. If you are dissatisfied or feel harmed by Boosty formation, the services, or anything related to the services, you may stop using the services. Termination is your sole and exclusive remedy. In particular, we disclaim that the services will result in any particular financial benefit or other benefit or success to customers in any way.

                        We neither warrant nor represent that your use of the services will not infringe the rights of third parties. We do not guarantee that the services will function without interruption or without errors. The operation of the services, including the website, may be interrupted due to maintenance, updates, or system or network failures. We disclaim all liability for damages caused by any such interruption or errors. Furthermore, we disclaim all liability for any malfunctions, impossibility of access, or poor use conditions of the services due to inappropriate equipment, disturbances related to internet service providers, to the saturation of the internet or any other network, and for any other reason.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Cancellation Policy and Termination</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Boosty may, at its sole discretion, refuse or cancel existing Services to any person or entity for any reason, including for misuse of Boosty promotions. For example, if Boosty were to offer a promotion (such as a promotion on state incorporation), such promotion can only be used once by a Customer, and attempting to use such promotion more than once by the same Customer is a misuse of Boosty promotions. In such a case, Boosty reserves the right to refuse service or cancel any orders in which a Customer is misusing a Boosty promotion by attempting to use such promotion a second time or more. Boosty is not responsible for any damage or loss that may result from Boosty's refusal or cancellation of Services for any reason.

                        An order is generally refundable until payment is forwarded to any government entity, such as a state or the U.S. and U.K federal government (typically within twenty-four hours after an order is placed), less a $50.00 cancellation fee and less any other expenses which have been paid or incurred in furtherance of order, including payments to any entities, including state agencies or the Federal government or third party vendors. Once payment has been forwarded to any government entity or third party, Boosty cannot accept any cancellations or any other changes to an order. In the case of trademark filings, once a trademark search has been conducted or payment has been made to the U.S. Patent and Trademark Office, Boosty cannot accept any cancellations or any other changes to an order. To request an order cancellation prior to Boosty making any payments to a government entity or other third party, or prior to a search being conducted for a trademark filing, your order must be in Review status. You must place your order on hold by clicking on the make changes button inside your order confirmation email and if the cancellation request meets Boosty's requirements as stated above, as determined by Boosty at Boosty's sole discretion, then Boosty will honor the cancellation. Instructions to cancel an order or any other changes to an order cannot be accepted by telephone or email.
                    </p>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16, fontWeight: 600 }}>
                        Boosty does not dispute legitimate chargebacks. If, however, an illegitimate or improper chargeback (e.g., a chargeback requested after payment by Boosty to a government entity or third party, or after a trademark search has been conducted) is submitted, Boosty reserves the right to take any actions Boosty deems appropriate at Boosty's sole discretion. Such actions by Boosty include, but are not limited to, canceling subscriptions or other Services and the dissolution of any entity formed for which payment was charged back or disputed by the Customer. Customer shall be liable to Boosty for all costs incurred by Boosty in dissolving such legal entity. If Boosty is unable or unwilling to dissolve such entity, or if payment was made to the U.S. Patent and Trademark Office for a trademark filing, Customer agrees to dissolve such entity promptly or abandon the trademark filing, at the request by Boosty, or be liable to Boosty for liquidated damages in the amount of five hundred U.S. dollars (US$500) plus any and all costs incurred by Boosty to collect the liquidated damages and dissolve the legal entity, including court costs, arbitration costs, legal fees, and collection costs to the extent not prohibited by applicable law. Boosty reserves the right to dissolve any legal entity which is fraudulently formed by any person who uses a third party's name without authorization from such third party to form the legal entity, and any person who forms such legal entity shall be liable to Boosty for liquidated damages in the amount of ten thousand U.S. dollars (US$10,000) plus any and all costs incurred by Boosty to collect the liquidated damages and dissolve the legal entity, including court costs, arbitration costs, legal fees, and collection costs to the extent not prohibited by applicable law.

                    </p>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        We may terminate these Terms for any reason or no reason, at any time, with or without notice. Any termination by us shall be effective immediately or as may be specified in our notice.

                        We may restrict, suspend or block the access of any Customer who abuses or misuses the Services. Misuse includes, among other things, infringing any intellectual property rights, using any functionality, feature or capability of the Services to generate, support or transmit any form of spam, engaging in any behavior or activity that we asked you not to do, or any other behavior that we, in our sole discretion, deem contrary to the mission and purpose of Boosty and the Services.

                        Upon termination, you may lose access to some or all of the Services. We may block access to the Services from an Internet Protocol (“IP”) address or range of IP addresses associated with those of terminated Customers. Upon termination, all licenses and other rights granted to you by us in these Terms will immediately cease, but any licenses you have granted to us will survive termination regardless of the reason for such termination. In addition, any fees invoiced to you prior to termination that has not been paid will continue to be due in accordance with these Terms, and no refunds shall be provided for payments previously made.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Auto-renewal Services and Price Changes</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Services provided by Boosty may automatically renew to keep a Customer's legal entity in compliance with state or other government requirements. A current and active credit card on file will be charged by Boosty's registered agent partner (e.g., North West Registered Agent LLC), for the annual renewal of the Registered Agent service. The current Registered Agent service annual renewal fee is available on the Website and the Customer Dashboard (see Website). The customer has the option to cancel the Registered Agent service at any time by assigning a new registered agent with the state and notifying Boosty of the change. If such notification is not provided to Boosty by the expiration date of the existing Registered Agent service, Boosty may automatically renew these Services. If Boosty is unable to complete an auto-renewal due to payment failure, Boosty may, at its sole discretion, cancel the Registered Agent service. Credit card information held for purposes of automatic renewal and subscription Services by Boosty will not be used for other purposes without Customer consent and permission. Boosty and Boosty's registered agent partner (e.g., North West Registered Agent LLC) implement reasonable safeguards to protect Customer data pursuant to the Privacy Policy. All prices for Services advertised on Boosty are subject to change at any time without notice.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Lawful use</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Customer hereby agrees, represents, and confirms that Customer will not use the information presented, products, Services or materials purchased from or provided by Boosty to commit fraud or any other illegal act or crime; to mispresent identity or legal purpose; to misrepresent, misstate, or falsify information on legal documentation; to misrepresent or mistake any fact; or in any other unlawful, illegal or improper manner. Customer hereby agrees to be responsible for any costs, including legal fees, incurred by Boosty in the event Customer fails to conform to this requirement. Customer hereby accepts full liability and shall indemnify, defend and hold Boosty, its owners, agents, employees, representatives, and providers harmless from any and all damages, claims, demands, judgments, expenses, and causes of action asserted against Boosty by any person or local, state or federal government agency arising from or out of any event, circumstance, act or incident resulting from Customer's use or misuse of the information presented, or products, services or materials provided by Boosty.

                        Customer hereby agrees and confirms to give Boosty complete authority to sign documents on Customer's behalf for the purpose of, and not limited to, completing an order or modification thereof on Customer's behalf.

                        Boosty reserves the right to investigate complaints or reported violations of these Terms and to take any and all actions it deems necessary or appropriate including the reporting of any suspicious or suspected unlawful or illegal activity to law enforcement, applicable regulators, or other third parties. Boosty may disclose any information necessary or appropriate in this respect, including Customer-submitted information, profiles, email addresses, usage reports, IP addresses, Customer traffic, and other Customer Content.

                        As a condition to your right to access the Website and to use the Services, you agree to these Terms, including agreeing to comply with all applicable laws, including, without limitation, privacy laws, intellectual property laws, export control laws, tax laws, and regulatory requirements and to provide accurate information to us and update it as necessary. You also agree to review our Privacy Policy, which may change from time to time as well as review and comply with notices sent by us concerning the Services.

                        You also agree to not act dishonestly, inappropriately, or unprofessionally by posting inappropriate, inaccurate, or objectionable Content. Furthermore, you agree not to use software, devices, scripts, robots, or other means or processes to access, “scrape,” “crawl” or “spider” any web pages or other part of the Services. You will also not override any security component included in or underlying the Services.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Post-Formation Information and Maintenance</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Customer acknowledges that Customer is solely responsible for the post-formation maintenance, reporting, filings, and any other documentation required to maintain formation status and/or legal, tax, or other required compliance with applicable federal, state, or local government agencies or oversight commissions. The customer acknowledges that Boosty may provide the Customer with information regarding post-formation maintenance. Boosty may provide updates, notifications, and/or reminders to the postal address or email address or cellular telephone number provided by the Customer or like a post or alert to the Customer's online account (if applicable) solely as a courtesy and such does not create any liability on the part of Boosty. Boosty is not responsible for: (i) Customer's action or inaction based on any information provided via email, facsimile, cellular phone text, phone conversation, website posting, alert, or any other form of transmission or communication; (ii) Customer's failure or inability to receive or access the information; or (iii) Boosty's decision, in its sole discretion, to cease providing such information. Boosty makes no representation or warranty as to the comprehensiveness or timeliness of the information. The customer acknowledges that it is the Customer's sole responsibility to comply with all applicable state, local, federal, or international laws.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Limitation of Liability</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        CUSTOMER HEREBY AGREES THAT IN NO EVENT SHALL Boosty FORMATION BE LIABLE FOR ANY DAMAGE, LOSS, CLAIM, INJURY, OR LIABILITY RESULTING FROM YOUR USE OF THE WEBSITE OR ARISING OUT OF OR IN CONNECTION WITH THE SERVICES OR INFORMATION PROVIDED BY Boosty (INCLUDING, BUT NOT LIMITED TO, LOST PROFITS, SPECIAL, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, COMPENSATORY, OR CONSEQUENTIAL DAMAGES).

                        TO THE EXTENT PERMITTED BY LAW, NEITHER Boosty NOR ANY OF MICHAGURU AFFILIATES SHALL BE LIABLE FOR ANY DAMAGES IN EXCESS OF THE FEES, IF ANY, YOU PAID Boosty DURING THE CALENDAR YEAR IN WHICH SUCH EVENT IS CLAIMED TO HAVE OCCURRED, OR USD $50, WHICHEVER AMOUNT IS GREATER.

                        NEITHER Boosty NOR ANY OF Boosty AFFILIATES SHALL BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, PUNITIVE OR CONSEQUENTIAL DAMAGES OR LOSS OF USE, PROFIT, REVENUE OR DATA TO YOU, ANY ENTITY, OR ANY THIRD PERSON. THIS LIMITATION OF LIABILITY SHALL APPLY REGARDLESS OF WHETHER (I) YOU BASE YOUR CLAIM ON CONTRACT, TORT, STATUTE OR ANY OTHER LEGAL THEORY, (II) WE KNEW OR SHOULD HAVE KNOWN ABOUT THE POSSIBILITY OF SUCH DAMAGES, OR (III) THE LIMITED REMEDIES PROVIDED IN THESE TERMS FAIL OF THEIR ESSENTIAL PURPOSE.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Waiver and Release</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Customer hereby waives, discharges, and releases Boosty of any and all claims, losses, demands, or liability of any kind against Boosty, its owners, partners, affiliates, representatives, employees, agents, licensors, suppliers, and any other third-party providers, whether known, unknown, disclosed or undisclosed, arising out of or in any way connected with your use of the information or Services of Boosty.

                        The customer also acknowledges and agrees that when third parties provide fulfillment services on Boosty's behalf and such services have been appropriately charged to the Customer, including auto-renew fees, such fulfillment services cannot be subject to any type of refund and/or discount after charges for those services have been applied to the Customer's account.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Indemnification</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Customer hereby agrees to indemnify, defend and hold harmless Boosty, its owners, partners, affiliates, representatives, employees, agents, licensors, suppliers, and any other third-party providers, from and against all claims, losses, expenses, damages, and costs, including but not limited to legal costs and fees, arising out of or in any way connected with Customer's use of the information or Services of Boosty. Customer hereby agrees to indemnify, defend and hold harmless Boosty, its owners, representatives, and employees, from and against all claims, losses, expenses, damages, and costs, including but not limited to legal costs and fees, arising out of or in any way connected to Services provided by an affiliate, partner, supplier, third party provider or vendor including but not limited to any act, omission, negligence, or error by such affiliate, partner, supplier, third party provider or vendor.

                        You agree to defend, indemnify and hold Boosty and its partners, as well as any of our respective subsidiaries, affiliated companies, officers, employees, members, directors, or service providers (“Boosty Affiliates”) harmless from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable attorne's fees and costs, arising out of or in any way connected with any of the following alleged activities: (i) your Content or your access to or use of the Services; (ii) any alleged breach of these Terms; (iii) any breach, infringement, misappropriation or violation of any third-party right including without limitation any intellectual property right, publicity right, confidentiality, property right or privacy right; (iv) your violation of any laws, rules, regulations, codes, statutes, ordinances or orders of any governmental and quasi-governmental authorities, including, without limitation, any regulatory, administrative and legislative authorities; or (v) any misrepresentation made by you. We ask that you cooperate as reasonably requested by Boosty in the defense of any claim. Boosty reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you. Customer will not, in any event, settle any claim against Boosty or Boosty Affiliates, without the prior written consent of Boosty, which consent Boosty may refuse in its sole discretion.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>Choice of Law and Binding Arbitration</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        In the event of a dispute between you and Boosty, please contact Boosty customer service for resolution. Any controversy or claim arising out of or relating to the use of the Website, the information provided on the Website, or via any other means of transmission from Boosty, or advertisement for Services, or any dispute in connection with these Terms or provision of Services by Boosty, or with respect to any other products, services, or materials provided by Boosty, or Customer’s use of the information provided on the Website, shall be submitted for final and binding arbitration (or online dispute/arbitration resolution) to a single arbitrator, provided that: (1) the arbitrator has at least five (2) years of expertise in the field relevant to the nature of the dispute and; and (2) the arbitrator is not or has not been a contract agent or a former employee of either party. In the event the parties are unable to agree on a single arbitrator who meets the qualifications set forth above, then an arbitrator shall be appointed by and/or under the rules of the American Arbitration Association (“AAA”) within ten (10) days of the date on which a party seeks assistance from the AAA in selection of a neutral arbitrator. The arbitration shall be conducted in accordance with the Commercial Rules and procedures of the AAA, and shall take place in Houston, Texas or in a location otherwise mutually agreed upon by the parties or via an online forum pursuant to online dispute or arbitration resolution processes. The parties further agree that: (1) the arbitration shall not last more than three (3) days; (2) there shall be no discovery other than the exchange of information and materials provided to the arbitrator by each of the parties, for which there shall only be thirty (30) days to accomplish; (3) the arbitrator’s final decision shall be issued within ninety (90) days after the date of selection of the arbitrator or within such period as the parties may otherwise mutually agree; and (4) except as otherwise expressly stated in these Terms, the arbitrator shall have the authority only to award equitable relief and direct, actual damages, and shall not have the authority to award punitive or consequential damages (including, but not limited to lost profits, special, indirect, incidental, or compensatory damages). Notwithstanding anything to the contrary in these Terms, the arbitrator shall have the authority to award liquidated damages and legal fees and costs and any remedy provided in these Terms in favor of Boosty in situations where a user of the Website has acted fraudulently or willfully (such as by registering a legal entity under a third party name without the third party’s consent), or where a Customer requests a chargeback without sufficient justification as determined by Boosty at Boosty’s sole discretion or after Boosty has paid any third party or governmental entity any funds in connection with the order associated with the chargeback. Each party shall be responsible for an equal sharing of the fees, expenses, and costs incurred by the arbitrator, and each party shall be responsible for their own costs and any fees of counsel they incur unless stated otherwise in these Terms. The decision of the arbitrator shall be final and binding and may not be appealed.

                        These Terms and any action related thereto are governed by the law of the State of Texas, and the federal law of the United States of America, without regard to or application of any conflicts of laws provisions or principles, and without regard of the location or nationality of a Customer. Any dispute between us or arising out of these Terms, the Privacy Policy, the Services, or their performance, shall be determined by one arbitrator in binding arbitration as specified above. The language of the arbitration shall be English.

                        To accommodate parties and witnesses that may be distant from each other, each hearing shall be conducted and all testimony shall be entered by audio conference or video conference. The award of the arbitrator shall be final and binding on the parties, and may be entered and enforced in any court or other tribunal of competent jurisdiction.

                        Should the arbitrator determine that the dispute is not arbitrable, Customer and Boosty consent to the exclusive jurisdiction and venue of the state and federal courts located in Houston, Texas, U.S.A. Notwithstanding anything to the contrary in these Terms, Boosty can, at its sole discretion, choose not to arbitrate a dispute and can choose to file suit in any state or federal court located in Houston, Texas. In such a case, Customer and Boosty consent to the exclusive jurisdiction and venue of the state and federal courts located in Houston, Texas.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0 }}>General Provisions</h3>

                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', fontSize: 16 }}>
                        Severability. If any provision of these Terms is found by an arbitrator or court of competent jurisdiction to be illegal, void, or unenforceable, the provision will be modified so as to render it enforceable and effective to the maximum extent possible in order to effect the intention of the parties with respect to the provisions within the context of the overall Terms. If a court or arbitrator finds the modified provision invalid, illegal, void, or unenforceable, the validity, legality, and enforceability of the remaining provisions of these Terms will not be affected.

                        Entire Agreement. These Terms constitute the entire, complete and exclusive agreement between you and us regarding the Services, and supersede all prior agreements and understandings, whether written or oral, or whether established by custom, practice, policy or precedent, with respect to the subject matter of these Terms. You acknowledge that you have had the opportunity to review these Terms and our Privacy Policy with counsel of your choice.

                        No Informal Waivers, Agreements or Representations. Any failure to act with respect to a breach of these Terms by one party does not waive the other party’s right to act with respect to that breach or subsequent similar or other breaches. Except as expressly and specifically contemplated by the Terms, no representations, statements, consents, waivers or other acts or omissions by either party or its affiliates shall be deemed legally binding unless expressly and specifically documented in a writing that refers to the Terms and states expressly the intent to modify or supplement the Terms.

                        Assignment and Delegation. You may not assign or delegate any rights or obligations under the Terms without the prior written permission of Boosty. Any purported assignment and delegation by you will be ineffective. We may freely assign or delegate some or all of our rights and obligations under the Terms and Privacy Policy, effective on sending a notice to you at the email address we have for you, or if we have no email address for you, by posting a notice of assignment on the Website.
                    </p>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', padding: '2% 10%', flexDirection: 'column' }}>
                    <h3 className='featuresHeading' style={{ margin: 0, fontWeight: 600, fontSize: 30 }}>CUSTOMER HEREBY AGREES THAT CUSTOMER HAS READ AND AGREES WITH THIS LEGAL DISCLAIMER AND TERMS AND CONDITIONS IN ITS ENTIRETY</h3>
                </Grid>

            </Grid>

            <Footer paddingMobile='10% 5%' paddingDesktop='5% 13%' />

        </div>
    );
}