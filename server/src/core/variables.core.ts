import { config } from 'dotenv';
config(); // load.env file into process.env
import { cpus, platform, freemem, arch } from 'node:os'; // Import OS

// All String Keys
export const StringKeys = Object.freeze({
	AppName: String('Portfolio'),
	CORS_URL: String(process.env.CORS_ORIGIN) || '*',
	JWT_SECRET: String(process.env.JWT_SECRET),
	JWT_EXPIRES_IN: String(process.env.JWT_EXPIRES_IN) || '30d',

	// Server Details
	Platform: String(platform()),
	Architecture: String(arch()),
	FreeRam: Number((freemem() / 1024 / 1024 / 1024).toFixed(2)),
	Model: String(cpus()[0].model),
	IP_INFO_API_KEY: String(process.env.IP_INFO_API_KEY),
});

// All Number Keys
export enum NumberKeys {
	PORT = Number(process.env.PORT) || 4821,
	// CPU Count
	CPUCount = cpus().length * Number(process.env.CPU_COUNT_MULTIPLIERENV) || 2,
}
