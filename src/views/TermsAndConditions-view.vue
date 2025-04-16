<template>
  <section class="legal-section py-5">
    <div class="container">
      <h1 class="text-center fw-bold mb-5">
        E-Tech Maritim S.L. - Terms and Conditions<br />
        For the Supply of Services
      </h1>

      <div class="legal-content mx-auto">
        <section v-for="(clause, i) in clauses" :key="i" class="mb-5">
          <p>{{ clause }}</p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
const clauses = `
1. Definitions and interpretation
1.1 In the Agreement:
“Affiliate” means in relation to a specific entity, any person that directly through one of mere intermediaries, controls, or is controlled or is under common control with or is the ultimate beneficial owner of such specified entity.
"Additional Works" All works not included in any Services and for which no fixed price has been provided and which shall be estimated separately and/or charged at a price on a time and materials basis plus materials to be discussed at time of the Additional Works arising.
“Agreement” means the agreement between the Supplier and the Customer incorporating these Terms and Conditions for the Supply of Services and the Proposal and any amendments to it from time to time.
“Business Day” means any weekday, other than a public holiday in Spain.
“Background Materials” means all works and materials in existence before the date of the Agreement (excluding Customer Materials).
“Bribery and Corruption” As covered by the Spanish Criminal Code (SCC) prohibiting and payment and receipts (including the promise or offer) of bribes both to public officials or authorities and to private entities or individuals in commercial transactions
“Business Hours” means between 09:00 and 17:30 on a Business Day.
“Charges” means the charges specified in the Proposal - the Supplier's Hourly Rate multiplied by the number of man-hours spent by the Supplier's personnel performing the Services, plus the Expenses payable by the Customer to the Supplier, which may be varied in accordance with Clause 7.
“Confidential Information” means:
(a) Any information supplied (whether supplied in writing, orally or otherwise) by one party to the other party marked as “confidential”, described as “confidential” or reasonably understood to be confidential.
(b) The terms (but not the existence) of the Agreement.
(c) any intellectual property rights belonging or licenced to the company and the Agent
(d) any commercial, financial, accounting, operational, managerial, legal, tax, business, personal, private or domestic arrangements or matters relating to the company and / or the agent.
“Control” means the legal power to directly or indirectly control the management of a company, firm or other entity.
And “Controlled” will be construed accordingly.
“Customer” means the customer for Services under the Agreement as specified in the Proposal.
“Customer Materials” means works and materials provided by the Customer to the Supplier for incorporation into the Deliverables.
“Customer Representatives” means the persons specified as such in the Proposal. “Deliverables” means the deliverables specified in the Proposal.
“Effective Date” means the earlier of:
(a) The date when the Supplier sends to the Customer its written confirmation that the Agreement is agreed or:
(b) The date when the Supplier begins supplying the Services to the Customer.
In each following the Customer’s acceptance of the proposal and these Terms & Conditions for the supply of Services
“Expenses” means the following expenses reasonably necessary for, and incurred exclusively in connection with, the performance of the Supplier's obligations under the Agreement:
(a) Travel expenses.
(b) Accommodation expenses.
(c) Subsistence expenses.
“Goods” Means the goods and related accessories, spare parts and documentation and other physical items and / or materials set out in the order or understood to by the parties to be included in the goods and / or to be supplied to the company
“Hourly Rate” means the Supplier's hourly labour rate as specified in the Proposal and varied in accordance with Clause 7.
“Intellectual Property Rights” means all intellectual property rights wherever in the world, whether registered or unregistered, including any application or right of application for such rights (and the “intellectual property rights” referred to above include copyright and related rights, moral rights, database rights, confidential information, trade secrets, know-how, business names, trade names, domain names, trade marks, service marks, passing off rights, unfair competition rights, patents, petty patents, utility models, semi-conductor topography rights and rights in designs).
“Location” means the address for the delivery of the goods and / or provision of the services as set out in the order
“Minimum Term” means the period specified as such in the Proposal.
“Order” means the company´s Purchase order for the goods and / or services to be provided by the supplier as set out in the companies PO Form.
"Parties” means the Supplier and the Customer
“Premises” means the premises of the Customer where the Services will be provided, in whole or part, by the Supplier, as specified in the Proposal.
“Proposal” means a proposal document issued by the Supplier to the Customer detailing the scope of the Services and other matters relating to the Agreement.
“Services” means the services supplied by the Supplier to the Customer under the Agreement, details of which are set out in the Proposal.
“Supplier” means E-Tech Maritim S.L. (Sociedad Limitada) a limited liability company incorporated in Spain and having its registered head office at Muelle Viejo s/n (Edificio Nave STP) Local 3A. 07012 Palma de Mallorca, Balearic Islands, Spain.
“Supplier Representatives” means the persons specified as such in the Proposal.
“Term” means the term of the Agreement.
“Works” means all works performed or to be performed by or on behalf of the Supplier including without limitation the Services and any Additional Works.
“Year” means a period of 365 days (or 366 days if there is a 29 February during the relevant period) starting on the Effective Date or on any anniversary of the Effective Date.
1.2 In the Agreement, a reference to a statute or statutory provision includes a reference to:


(a) That statute or statutory provision as modified, consolidated and/or re-enacted from time to time.
(b) Any subordinate legislation made under that statute or statutory provision.
1.3 The Clause headings do not affect the interpretation of the Agreement.
1.4 In the Agreement, “persons” include companies, partnerships, limited liability partnerships, unincorporated associations and trusts.
1.5 The ejusdem generis rule is not intended to be used in the interpretation of the Agreement; it follows that a general concept or category utilised in the Agreement will not be limited by any specific examples or instances utilised in relation to such a concept or category.

2. Appointment and Term
2.1 The Customer appoints the Supplier as its supplier of the Services during the Term.
2.2 The Agreement will come into force on the Effective Date and will continue in force indefinitely, unless and until terminated in accordance with Clause 18, after which it will terminate automatically, unless previously terminated in accordance with Clause 18.
2.3 The agreed period of the Services specified in the Proposal shall not commence before receipt by the Supplier of the agreed starting payment in cleared funds.

3. Services & Additional Works
3.1 The Supplier will supply the Services to the Customer in accordance with the terms of the Agreement.
3.2 The Supplier will use reasonable endeavours to meet any timetable for the provision of the Services set out in the Proposal; but the time for delivery of the Services will not be of the essence of the Agreement.
3.3 Contractor may at its discretion, cost and expense subcontract all or any part of the Works to appropriately qualified parties. If the Supplier does sub-contract the provision of Services, the Supplier will remain liable to the Customer for the performance of the sub-contracted obligations
3.4 In the performance of the Services at the Premises, the Supplier shall comply with all reasonable health, safety and security policies and regulations advised to the Customer to the Supplier
3.5 The Supplier will not take any action or do anything which would or would be likely to damage the reputation or goodwill of the Customer, or bring the Customer into disrepute.
3.6 Additional Works not referred to in the Proposal will be defined in the Supplier’s work order request form signed by the Customer (or as otherwise agreed by the Parties in writing).
3.7 On commencement of the Services, any unknown situation that were not apparent at the time of pricing, affecting the scope of the Services, such conditions may require Additional Works that will be charged accordingly.
3.8 Additional Works orders shall be subject to these Terms and Conditions.

4. Deliverables
4.1 The Supplier will deliver the Deliverables to the Customer in accordance with the terms of the Agreement.
4.2 The Supplier will use reasonable endeavours to meet any timetable for the delivery of the Deliverables



set out in the Proposal; but the time for delivery of the Deliverables will not be of the essence of the Agreement.

4.3 Within 10 Business Days following delivery of the Deliverables, the Customer will run acceptance inspections to determine whether the Deliverables supplied by the Supplier:
(a) Meet the specification of the Deliverables set out in the Proposal.
(b) Are of a good professional standard.
4.4 Acceptance of Deliverables supplied to the Customer will occur upon the earlier of:
(a) The Customer informing the Supplier that the tests under Clause 4.3 have been passed or:
(b) The period specified in Clause 4.3 passing without the Customer giving a written notice of rejection of the Deliverables to the Supplier.
4.5 If the Customer rejects Deliverables supplied by the Supplier, the Customer will allow the Supplier a further reasonable period (of no less than 30 Business Days) to remedy the problems, following which the Customer will repeat the acceptance inspections.

5. Customer obligations
5.1 The Customer will provide to, or procure for, the Supplier any:
(a) Support and advice.
(b) Information and documentation.
(c) Third party co-operation.
(d) Licenses of third party software and:
(e) Governmental, legal or regulatory licenses, consents or permits reasonably necessary to enable the Supplier to discharge its obligations under the Agreement.
5.2 The Customer will:
(a) Provide to the Supplier prompt access to the Premises upon request.
(b) Be responsible for ensuring the health and safety of the Supplier's personnel, agents and subcontractors whilst they are at the Premises.
This includes safe working ambient temperatures and humidity as defined by Spanish law
(c) Maintain the Premises in good order for the supply of Services, and in accordance with all applicable laws.
(d) Inform the Supplier of all health and safety rules and regulations and any reasonable security requirements that apply at the Premises and:
(e) Maintain reasonable insurance cover for the Supplier's personnel, agents and subcontractors whilst they are working on Premises (including reasonable public liability insurance).
(f) The safety and security of the Vessel and its crew shall at all times be and remain the responsibility of the Customer. The Customer shall, to the fullest extent permitted by law, be fully responsible for all risks, claims and liabilities of whatever nature in any way connected with the Vessel and/or its crew. The Customer shall accordingly maintain hull and machinery, P&I (liability) and crew insurances on customary terms throughout the period of the Works.
5.3 The Customer will not take any action or do anything which would or would be likely to damage the reputation or goodwill of the Supplier, or bring the Supplier into disrepute.

6. Project management
6.1 The Customer will ensure that all instructions in relation to the Agreement will be given by a Customer


Representative to a Supplier Representative, and the Supplier:
(a) May treat all such instructions as the fully authorised instructions of the Customer and:
(b) Will not comply with any other instructions in relation to the Agreement without first obtaining the consent of a Customer Representative.
6.2 The parties will hold project management meetings at agreed locations and by telephone and via the internet:
(a) Regularly during the Term and:
(b) At the reasonable request of either party.
6.3 A party requesting a project management meeting to be held in person will give to the other at least 5 Business Days' notice of the meeting.
6.4 Wherever necessary to enable the efficient conduct of business, the Customer will be represented at the project management meetings by at least one Customer Representative and the Supplier will be represented at the project management meetings by at least one Supplier Representative.

7. Charges and payment
7.1 The Customer will pay the Charges to the Supplier in accordance with the provisions of this Clause 7.
7.2 The Supplier may issue an invoice for the Charges to the Customer from time to time during the Term on or after the dates set out in the Proposal or at any time after the relevant Services have been delivered to the Customer.
7.3 The Customer will pay the Charges to the Supplier within 7 days of the date of receipt of an invoice issued in accordance with Clause 7.2.
7.4 All amounts payable under the Agreement are exclusive of all sales, value-added, withholding and other taxes and duties which will be payable by the Customer (except for taxes payable on the Supplier's net income, which will be payable by the Supplier). All such taxes are to be added to the prices in accordance with current legislation. To claim exemption from any taxes, the Customer shall supply the Supplier with valid documentation showing compliance with all applicable requirements. The Customer shall indemnify the Supplier and hold the Supplier harmless against any and all liability arising from the use or submission of any such documentation.
7.5 Charges must be paid by bank transfer (using such payment details as are notified by the Supplier to the Customer from time to time).
7.6 If the Customer does not pay any amount properly due to the Supplier under or in connection with the Agreement, the Supplier may:
(a) Charge the Customer interest on the overdue amount at the rate of 8.5% per year above the base rate of Bank of Spain a from time to time (which interest will accrue daily until the date of actual payment, be compounded quarterly, and be payable on demand) or:
7.7 The Supplier may elect to vary the Charges/Hourly Rate by giving to the Customer not less than 30 days' written notice of the variation expiring at the end of any Year of the Agreement.
7.8 The Customer will reimburse the Supplier in respect of the Expenses and the Supplier may invoice in respect of Expenses at any time after the relevant Expenses have been incurred by the Supplier.
7.9 The Supplier will:




(a) Ensure that the personnel providing the Services complete records of their time spent providing those Services.
(b) Collect and collate evidence of all Expenses.
(c) Retain such records and evidence during the Term and for a period of 12 months following the end of the Term and:
(d) Supply such records and evidence to the Customer within 10 Business Days following receipt of a written request to do so.
7.10 VAT or equivalent shall be charge by the supplier and paid by the company at the applicable rate, the supplier shall arrange for the Goods and / or services to be supplier at zero rate of VAT or equivalent where ever possible and / or shall liase with the company regarding any VAT exemptions that might be applicable to the supply
7.11 If any invoice remains unpaid with no justification for more than 30 days from the due date, the Supplier may suspend the Works and reschedule the completion date accordingly. The Customer shall be responsible for all costs, expenses and liabilities incurred as a result of any such suspension, including without limitation downtime and remobilisation charges, displacement costs, overtime required to reduce delays, subcontractors’ charges, increased costs of insurance and interruption and/or extension of warranties.
7.12 If any such suspension exceeds 30 days, the Supplier may, but shall not be bound to, terminate the Agreement without prejudice to its accrued rights.

8. Warranties
8.1 The Customer warrants to the Supplier that it has the legal right and authority to enter into and perform its obligations under the Agreement.
8.2 The Supplier warrants to the Customer that:
(a) It has the legal right and authority to enter into and perform its obligations under the Agreement.
(b) The Services will be performed with reasonable care and skill.
8.3 All of the parties' liabilities and obligations in respect of the subject matter of the Agreement are expressly set out in the terms of the Agreement. To the maximum extent permitted by applicable law, no other terms concerning the subject matter of the Agreement will be implied into the Agreement or any related contract.
8.4 Labour and Parts Warranty
The warranty covers any defects in material or workmanship under normal use during the warranty period to obtain warranty service, you must first contact us to determine the problem and to find the most appropriate solution
During the warranty period ETY will repair or replace at no charge products or parts of
any equipment which is covered by a 12 month warranty subject to having not been altered, modified or re-configured by any third party and is under normal use and maintenance
We will trouble shoot and try and rectify the fault via email / phone / remote access via internet in the first instance
Supply of an engineer to carry out any equipment repair is covered by this warranty, subject to the vessel being at the Yard / Marina where installation took place
Free delivery of replacement parts subject to being at the Yard / Marina where the installation took place
Equipment and Labour must be fully paid up before warranty work is undertaken



EXCLUSIONS
•	Travel, travel time and accommodation of engineers.
•	Any original parts / cables etc used in the installation of any new systems
•	Delivery costs outside of installation yard
•	Failure to follow operating procedures.
•	Unauthorized repairs or modifications.
•	Damage caused by other trades
•	Fire, flood, “act of god” or any other contingencies beyond the control of the Supplier
•	Damage of the product resulting from negligence
•	Theft or loss of the product
•	We accept no liability for incorrect fixings chosen or specified by the customer for certain installations which fails or is not suitable.
•	No returns will be accepted for reasons other than defects in workmanship or materials
•	This warranty does not apply to conditions caused by normal wear and tear upon the product
9. Application of these conditions
9.1 These conditions apply to and form part of the contract between the supplier and the company. They supersede any previously issued terms and conditions of purchase or supply.
9.2 Delivery of the goods and / or services by the supplier shall be conclusive evidence of suppliers acceptance of these conditions.
9.3 No variation of these conditions or to an order or to the contract shall be binding unless expressly agreed in writing and executed by a duly authorized signatory on behalf of the company
9.4 Each order by the company to the supplier shall be an offer to purchase goods and / or services subject to these conditions.
9.5 Acceptance of the order by the supplier shall take place when it is expressly accepted or by any other conduct of the supplier which the company reasonable considers is consistent with the acceptance of order.

10. Prices
10.1 The price for goods and / or services shall be as set out in the order or in default of such provision, shall be calculated in accordance with the suppliers scale of charges provided that such scale of charges shall be advised by the supplier and received and acknowledged by the company before the date the order is made and shall be annexed to the order.
10.2 The price includes delivery of goods to and where appropriate unloading of goods unless otherwise specified
10.3 The price includes in the case of the provision of services, all transport costs for personnels tools and equipment necessary to execute the services at location unless specified otherwise
10.4 Prices quoted shall remain valid for the period stated in the Proposal and may thereafter be subject to adjustment. Unless otherwise agreed, all budgets, quotations, prices, estimates and invoices shall be deemed to be in the currency stated in the Proposal. The prices offered and expressed in Euros will remain unchanged during the validity period of the Proposal, unless, on the billing date, the parity against the


currency of the purchase has suffered a variation of +3%, in which case the Supplier reserves the right to apply the according forex correction. Prices are calculated based on the taxes and fees in force at any time in the countries of origin of the products; any change in those rates will be reflected in the sale price. Any shipyard fees or surcharges which may be applicable are solely for the Customer’s account.
10.5 Budgets and estimates are given in good faith and are subject to the completeness and accuracy of information provided by the Customer.
10.6 The Supplier shall have no responsibility for any delays caused by non-receipt of payments.
10.7 Reservation deposits shall be non-refundable.

11. Extended Guarantee
• The equipment will be subject to our normal maintenance and guarantee against faulty materials and workmanship for a period of 12 calendar months from the date of commissioning, alternatively, 18 months from the date of dispatch whichever period is the earlier, provided it is stored under approved conditions after delivery from our Works.
• The conditions of Warranty remain the same as Section 8 of our T&C´s

12. Intellectual Property Rights
12.1 The Supplier hereby assigns to Customer with full title guarantee all of its existing and future Intellectual Property Rights in the Deliverables / products of the Services.
12.2 The Supplier warrants that the Deliverables / the products of the Services (excluding the Customer Materials), and their use by the Customer in accordance with the terms of the Agreement, will not infringe the UK Intellectual Property Rights of any third party.
12.3 Subject to the Customer's compliance with Clause 9.4, the Supplier hereby indemnifies and undertakes to keep indemnified the Customer against any losses, damages, claims, obligations, liabilities, costs and expenses (including legal fees and costs and expenses incurred in investigating, preparing, defending or prosecuting any litigation, claim, proceeding or demand) arising out of or in connection with any breach by the Supplier of the warranty in Clause 9.2.
12.4 The Customer will:
(a) Upon becoming aware of an actual or potential IPR Infringement Claim, notify the Supplier;
(b) Provide to the Supplier all reasonable assistance in relation to the IPR Infringement Claim;
(c) Allow the Supplier the exclusive conduct of the IPR Infringement Claim and all related disputes, proceedings, negotiations and settlements; and
(d) Not admit liability in connection with any IPR Infringement Claim or settle any IPR Infringement Claim without the prior written consent of the Supplier.
12.5 Works and materials comprised in the Deliverables / products of the Services, the Intellectual Property Rights in which are owned in whole or part by a third party (excluding the Customer Materials) will be as agreed between the parties:
(a) Supplied in accordance with the relevant licensor’s standard terms for online use;
(b) Supplied on licence terms notified by the Supplier to the Customer;
(c) Sub-licensed by the Supplier to the Customer on terms notified by the Supplier to the Customer; and/or



(d) Sub-licensed by the Supplier to the Customer on the basis of a non-exclusive, worldwide, royalty-free license to use the works and materials in connection with the Deliverables / products of the Services.

13. Limitations of liability
13.1 Nothing in the Agreement will exclude or limit the liability of either party for:
(a) Death or personal injury caused by that party's negligence;
(b) Fraud or fraudulent misrepresentation on the part of that party; or
(c) Any other liability which may not be excluded or limited under applicable law.
13.2 Subject to Clause 13.1 and without prejudice to the express indemnities in the Agreement, each party's liability to the other party under or in connection with the Agreement or any collateral contract, whether in contract or tort (including negligence), will be limited as follows:
(a) Neither party will be liable for any:
(i) Loss of profits, income or anticipated savings;
(ii) Loss or corruption of any data, database or software;
(iii) Reputational damage or damage to goodwill;
(iv) Loss of any commercial opportunity; or
(v) Indirect or consequential loss or damage;
(b) Neither party will be liable for any losses arising out of a Force Majeure Event;
(c) The Supplier's liability in relation to any event or series of related events will not exceed the greater of:
(i) 15% of the contracted value and
(ii) the total amount paid or (if greater) payable by the Customer to the Supplier under the Agreement during the 12 month period immediately preceding the event or events giving rise to the claim.
13.3 No employee or agent of the Supplier, including its subcontractors, suppliers and others for whom it may be responsible, shall under any circumstances whatsoever be under any liability whatsoever to the Customer for any loss, damage or delay of whatever kind arising or resulting directly or indirectly from any act, neglect or default on its part while acting in the course of or in connection with its employment or otherwise engaged in or about the performance of the Works and, without prejudice to the generality of the foregoing, every exemption, limitation, condition and liberty herein contained and every right, exemption from liability, defence and immunity of whatever nature applicable to the Supplier or to which the Supplier is entitled hereunder shall also be available and shall extend to protect every such other person or entity as aforesaid and for the purposes of the foregoing provisions of this sub-clause the Supplier is or shall be deemed to be acting as agent or trustee on behalf of and for the benefit of all such persons and entities who shall to this extent be or be deemed to be parties to the Agreement.

14. Data protection
14.1 The Customer warrants that it has the legal right to disclose all Personal Data that it does in fact disclose to the Supplier under the Agreement, and that the processing of that Personal Data by the Supplier for the purposes of and in accordance with the terms of the



Agreement will not breach any applicable laws (including the Data Protection Act 1998).
14.2 The Supplier warrants that:
(a) it will act only on instructions from the Customer in relation to the processing of any Personal Data performed by the Supplier on behalf of the Customer; and
(b) it has in place appropriate security measures (both technical and organisational) against unlawful or unauthorised processing of Personal Data and against loss or corruption of Personal Data processed by the Supplier on behalf of the Customer.

15. Confidentiality
15.1 Each party will keep confidential the Confidential Information of the other party, and will not disclose that Confidential Information except as expressly permitted by this Clause 12.
15.2 Each party will protect the confidentiality of the Confidential Information of the other party using at least reasonable security measures.
15.3 The Confidential Information of a party may be disclosed by the other party to its employees and professional advisers, provided that each recipient is legally bound to protect the confidentiality of the Confidential Information.
15.4 These obligations of confidentiality will not apply to Confidential Information that:
(a) Has been published or is known to the public (other than as a result of a breach of the Agreement);
(b) Is known to the receiving party, and can be shown by the receiving party to have been known to it, before disclosure by the other party; or
(c) Is required to be disclosed by law, or by an order (binding upon the relevant party) of a competent governmental authority, regulatory body or stock exchange.


16. Publicity
Neither party will make any public disclosure relating to the Agreement (including press releases, public announcements and marketing materials) without the prior written consent of the other party, not to be unreasonably withheld or delayed.

17. Contractual Period, Force Majeure Event and Covid 19
17.1 The contractual period may be adjusted as a result of any delay or other interference or adjustment to the Services caused or necessitated by or resulting from any event or circumstance beyond the reasonable control of the Supplier, whether or not foreseeable at the date of the Proposal, including without limitation acts of god, acts, directives or recommendations of government or supra-national authorities, war or other hostilities, blockade, revolution, insurrection, mobilisation, civil war, civil commotion, riot, sabotage, epidemic, pandemic, quarantine, earthquake, adverse weather conditions, explosion, fire, strikes, lockouts, failure of electricity or other services, collision or stranding, import or export restrictions, destruction, closure or access restrictions at the whole or part of the Supplier's yard or other facility at which the Works are being or to be performed or at which the Vessel is or is to be located or the facilities of any of the Supplier’s subcontractors or suppliers, any delay by the Classification Society, other regulatory bodies or any


third parties, or the delay or destruction of equipment or materials in transit to the Supplier's yard or other facility as aforesaid (hereafter “Force Majeure”) and the Supplier shall have no responsibility for any delays or other adjustments to the performance of the Works thereby caused or necessitated. The contractual period shall also be adjusted to accommodate any enlargement of the Services not included within the scope of the Proposal or any Additional Works. In the event of any overtime being required in order to make up time lost due to unfavourable weather or other delays beyond the Supplier’s control, the additional cost of such overtime shall be borne by the Client.
17.2 Where a Force Majeure Event gives rise to a failure or delay in either party performing its obligations under the Agreement (other than obligations to make payment), those obligations will be suspended for the duration of the Force Majeure Event.
17.2 A party who becomes aware of a Force Majeure Event which gives rise to, or which is likely to give rise to, any failure or delay in performing its obligations under the Agreement, will:
(a) Forthwith notify the other; and
(b) Will inform the other of the period for which it is estimated that such failure or delay will continue.
17.3 The affected party will take reasonable steps to mitigate the effects of the Force Majeure Event.
17.4 Regarding any estimate / quotation that has been done in good faith, but due to the Coronavirus COVID-19 or any Pandemic and its effect on the world economy we cannot guarantee our Material delivery time should the virus spread and production times could move out to the right. Should this occur all parties need to state actions being taken and advise accordingly.
Also, the Customer shall be responsible for any additional costs reasonably incurred by the Supplier as a result of COVID-19 and/or related travel restrictions, quarantine arrangements or other rules or guidelines whether promulgated nationally, locally or by the shipyard at which the Works are to be performed including without limitation any additional travel, labour or accommodation costs, all of which shall be notified to the Customer in advance where practicable and invoiced at cost.

18. Termination
18.1 Either party may terminate the Agreement at any time by giving at least 30 days written notice to the other party expiring at any time after the end of the Minimum Term.
18.2 Either party may terminate the Agreement immediately by giving written notice to the other party if the other party:
(a) Commits any material breach of any term of the Agreement, and:
(i) The breach is not remediable; or
(ii) The breach is remediable, but other party fails to remedy the breach within 30 days of receipt of a written notice requiring it to do so; or
(b) Persistently breaches the terms of the Agreement.
18.3 Either party may terminate the Agreement immediately by giving written notice to the other party if:
(a) The other party:
(i) Is dissolved;
(ii) Ceases to conduct all (or substantially all) of its business;



(iii) Is or becomes unable to pay its debts as they fall due;
(iv) Is or becomes insolvent or is declared insolvent; or
(v) Convenes a meeting or makes or proposes to make any arrangement or composition with its creditors
(b) An administrator, administrative receiver, liquidator, receiver, trustee, manager or similar is appointed over any of the assets of the other party;
(c) An order is made for the winding up of the other party, or the other party passes a resolution for its winding up (other than for the purpose of a solvent company re-organisation where the resulting entity will assume all the obligations of the other party under the Agreement);
(d) (Where that other party is an individual) that other party dies, or as a result of illness or incapacity becomes incapable of managing his or her own affairs, or is the subject of a bankruptcy petition or order.
18.4 The Supplier may terminate the Agreement immediately at any time by giving written notice to the Customer if:
(a) The Customer fails to pay in full and on time any amount due to the Supplier whether due under the Agreement or otherwise;
(b) There is a change of Control of the Customer or any parent undertaking or holding company of the Customer; or
(c) The Customer or any officer, partner or key employee of the Customer is convicted of any criminal offence.
18.5 The Customer may terminate the Agreement immediately at any time by giving written notice to the Supplier if:
(a) There is a change of Control of the Supplier or any parent undertaking or holding company of the Supplier; or
(c) The Supplier or any officer, partner or key employee of the Supplier is convicted of any criminal offence.

19. Effects of termination
19.1 Upon termination all the provisions of the Agreement will cease to have effect, save that the following provisions of the Agreement will survive and continue to have effect (in accordance with their terms or otherwise indefinitely): Clauses 1, 7.6, 7.9, 9.1, 9.3, 9.4, 10, 12, 16, 17 and 19.
19.2 Termination of the Agreement will not affect either party’s accrued rights (including accrued rights to be paid) as at the date of termination.
19.3 Within 30 days of the termination of the Agreement, the Customer will:
(a) Return to the supplier or dispose of as the Supplier may instruct all documents and materials containing Confidential Information of the Supplier; and
(b) Irrevocably delete from its computer systems all Confidential Information of the Supplier.
19.4 Within 30 days of the termination of the Agreement, the Supplier will:
(a) return to the supplier or dispose of as the Customer may instruct all documents and materials containing Confidential Information of the Customer; and
(b) Irrevocably delete from its computer systems all Confidential Information of the Customer.

20. Non-solicitation



Neither party will, without the other party's prior written consent, either during the term of the Agreement or within 6 months after the date of effective termination of the Agreement, engage, employ or otherwise solicit for employment any employee or contractor of the other party who has been involved in the Agreement or the performance of the Agreement.

21. Notices
21.1 Any notice given under the Agreement must be in writing (whether or not described as “written notice” in the Agreement) and must be delivered personally, sent by pre-paid first class post (air mail if the customer and supplier are in different countries), or sent by fax or email, for the attention of the relevant person, and to the relevant address, fax number or email address given below (or as notified by one party to the other in accordance with this Clause).
The Supplier:
The addressee, address, fax and email address given in the Proposal
The Customer:
The addressee, address, fax and email address given in the Proposal
21.2 A notice will be deemed to have been received at the relevant time set out below (or where such time is not within Business Hours, when Business Hours next begin after the relevant time set out below):
(a) Where the notice is delivered personally, at the time of delivery;
(b) Where the notice sent by first class post, 48 hours after posting (by air mail 72 hours); and
(c) Where the notice sent by fax or email, at the time of the transmission (providing the sending party retains written evidence of the transmission).

22. General
22.1 This agreement is governed by the stipulations freely and jointly agreed upon by the Parties, without general subscription thereof, each of the clauses that make up the agreement having been negotiated individually.
22.2 No breach of any provision of the Agreement will be waived except with the express written consent of the party not in breach.
22.3 If a Clause of the Agreement is determined by any court or other competent authority to be unlawful and/or unenforceable, the other Clauses of the Agreement will continue in effect. If any unlawful and/or unenforceable Clause would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the Clause will continue in effect (unless that would contradict the clear intention of the parties, in which case the entirety of the relevant Clause will be deemed to be deleted).
22.4 Nothing in the Agreement will constitute a partnership, agency relationship or contract of employment between the parties.
22.5 The Agreement may not be varied except by a written document signed by or on behalf of each of the parties.
22.6 Save as expressly provided in this Clause or elsewhere in the Agreement, neither party may without the prior written consent of the other party assign, transfer, charge, license or otherwise dispose of or deal in the Agreement or any rights or obligations under the Agreement.



22.7 Each party agrees to execute (and arrange for the execution of) any documents and do (and arrange for the doing of) any things reasonably within that party’s power, which are necessary to enable the parties to exercise their rights and fulfill their obligations under the Agreement.
22.8 The Agreement is made for the benefit of the parties, and is not intended to benefit any third party or be enforceable by any third party. The rights of the parties to terminate, rescind, or agree any amendment, waiver, variation or settlement under or relating to the Agreement are not subject to the consent of any third party.
22.9 Subject to Clause 13.1:
(a) The Agreement will constitute the entire agreement between the parties in relation to the subject matter of the Agreement, and supersedes all previous agreements, arrangements and understandings between the parties in respect of that subject matter;
(b) Neither party will have any remedy in respect of any misrepresentation (whether written or oral) made to it upon which it relied in entering into the Agreement; and
(c) Neither party will have any liability other than pursuant to the express terms of the Agreement.
22.9 The Agreemet shall be governed by and construed in accordance with the substantive laws of State of Spain without giving effect to its principle or rules of conflicts of laws. Any dispute arising under or in relation to this Agreement shall be resolved by institutional arbitration in law, in the Tribunal Arbitral de Barcelona, of the Catalan Association for Arbitration, which will be responsible for appointing an arbitrator and administering the arbitration in accordance with its regulations. Both parties agree that the competent court to execute the arbitration resolution is in Barcelona only, and each of the parties hereby submits irrevocably to the exclusive jurisdiction of such court.
22.10 The Parties may refer technical disputes (being disputes or claims regarding any technical matter arising out of or relating to the Works and/or the condition of the Vessel prior to commencement of the Works) to a suitably qualified independent expert agreed between them (the “Technical Expert”) who shall make a determination within 21 days of receiving the Parties’ reference and whose opinion shall be final and binding. If the Parties shall fail to agree upon the identity of an expert as aforesaid, such expert shall be nominated by the Vessel’s Classification Society.

The Parties, by signing the estimate, accept the established terms and conditions.

`.split(/\n(?=\d+\.)/); // Divide por el comienzo de los bloques numerados como 1., 2., etc.
</script>

<style scoped>
.legal-section {
  background-color: #f9f9f9;
  min-height: 100vh;
}

.legal-content {
  max-width: 860px;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.7;
  white-space: pre-line;
}
</style>
