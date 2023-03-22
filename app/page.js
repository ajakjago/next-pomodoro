import React from 'react';
import Image from 'next/image';

export default function page() {
	return (
		<div>
			<div className="navbar">
				<div className="navbar-start">
					<a className="navbar-item">Pomodoro App</a>
				</div>
				<div className="navbar-end">
					<a className="navbar-item">About</a>
					<a className="navbar-item" htmlFor="modal-1">
						Share
					</a>
				</div>
			</div>

			<div className="flex items-center justify-center h-screen ">
				<div className="text-center">
					<h1 className="mb-4 text-5xl `">Coming Soon!</h1>
					<p className="text-lg">
						{' '}
						We're currently working on something awesome. Check back soon!
					</p>
					<div className="mx-6">
						<div className="sticky top-0 flex pt-5 -10">
							<input
								className="mb-5 input input-block "
								placeholder="Task name"
							/>
							<button className="px-3 ml-2 btn hover:bg-gray-300">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
										fill="currentColor"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}
