import React from 'react';
import Image from 'next/image';

export default function page() {
	return (
		<div>
			<div className="navbar">
				<div class="navbar-start">
					<a class="navbar-item">Pomodoro App</a>
				</div>
				<div class="navbar-end">
					<a class="navbar-item">About</a>
					<a class="navbar-item" htmlFor="modal-1">
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
				</div>
				<div></div>
			</div>
		</div>
	);
}
