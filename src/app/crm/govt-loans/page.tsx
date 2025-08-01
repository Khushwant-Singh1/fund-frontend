"use client";

import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsLabel,
	TabsDescription,
} from "@/components/ui/tab";

import {
	TableHeader,
	TableWrapper,
	TableHeadings,
	TableRow,
	EmailCell,
	StatusBadge,
	ViewAllButton,
} from "@/components/ui/data-table";
import leads from "@/app/crm/sample-data";

export default function Page() {
	return (
		<div>
			<h4 className="font-semibold mb-6 text-black">Govt. Loan Types</h4>

			<Tabs defaultValue="msme">
				<TabsList>
					<TabsTrigger value="mudra">
						<TabsLabel>
							Mudra Loan
							<TabsDescription>
								Empowering small businesses with easy, collateral-free funding
								access.
							</TabsDescription>
						</TabsLabel>
					</TabsTrigger>

					<TabsTrigger value="msme">
						<TabsLabel>
							MSME Loan
							<TabsDescription>
								Financial support tailored for micro, small, and medium
								enterprises.
							</TabsDescription>
						</TabsLabel>
					</TabsTrigger>

					<TabsTrigger value="pmegp">
						<TabsLabel>
							PMEGP Loan
							<TabsDescription>
								Promoting self-employment through government-backed enterprise
								funding.
							</TabsDescription>
						</TabsLabel>
					</TabsTrigger>

					<TabsTrigger value="cgtmse">
						<TabsLabel>
							CGTMSE Loan
							<TabsDescription>
								Credit guarantee scheme for collateral-free business loans.
							</TabsDescription>
						</TabsLabel>
					</TabsTrigger>

					<TabsTrigger value="startup">
						<TabsLabel>
							Startup India Loan
							<TabsDescription>
								Fueling innovation with support for budding entrepreneurs and
								startups.
							</TabsDescription>
						</TabsLabel>
					</TabsTrigger>
				</TabsList>
			</Tabs>

			{/* Govt. Loan Leads Table */}
			<div className="mt-6">
				<div className="py-4">
					<TableHeader>Govt. Loan Leads</TableHeader>

					<TableWrapper>
						<table className="w-full bg-white overflow-hidden text-sm">
							<TableHeadings
								columns={[
									"File No.",
									"Loan",
									"Loan Mode",
									"Applicant name",
									"Subscriber",
									"Email",
									"Phone",
									"Review",
									"Status",
								]}
							/>
							<tbody>							{leads.map((lead, index) => (
								<TableRow
									key={index}
									row={[
										lead.fileNo,
										lead.loan,
										lead.mode,
										lead.applicant,
										lead.subscriber,
										<EmailCell key={`email-${index}`} email={lead.email} />,
										lead.phone,
										lead.review,
										<StatusBadge
											key={`status-${index}`}
											status={
												lead.status.toLowerCase() as
													| "approved"
													| "pending"
													| "rejected"
											}
										/>,
										]}
									/>
								))}
							</tbody>
						</table>
					</TableWrapper>

					<ViewAllButton />
				</div>
			</div>
		</div>
	);
}
