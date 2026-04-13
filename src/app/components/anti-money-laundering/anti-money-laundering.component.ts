import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-money-laundering',
  templateUrl: './anti-money-laundering.component.html',
  styleUrls: ['./anti-money-laundering.component.scss'],
})
export class AntiMoneyLaunderingComponent {
  commitmentsArray = [
    {
      compliance_area: 'Compliance with Regulations',
      description:
        'UP Global Markets Ltd. strictly complies with all anti-money laundering (AML) and counter-terrorist financing (CTF) regulations in the jurisdictions in which we operate.',
    },
    {
      compliance_area: 'Know Your Customer (KYC) Procedures',
      description:
        'We require all clients to complete a thorough verification process, including providing valid identification documents, proof of address, and other necessary information. Enhanced due diligence is applied for higher-risk clients, transactions, or jurisdictions.',
    },
    {
      compliance_area: 'Monitoring and Reporting',
      description:
        'All transactions are monitored for suspicious activity, including irregular trading patterns and large or unusual withdrawals or deposits. Any suspicious transactions are promptly reported to the relevant authorities as required by law.',
    },
    {
      compliance_area: 'Risk-Based Approach',
      description:
        'We apply a risk-based approach to AML/CTF compliance by assessing the potential risks associated with client profiles, jurisdictions, and transactions.',
    },
    {
      compliance_area: 'Employee Training',
      description:
        'All employees are regularly trained to identify, prevent, and report suspicious activities in accordance with AML regulations.',
    },
  ];
}
