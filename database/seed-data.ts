interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description:
                'Pendiente: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro incidunt amet suscipit. ',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description:
                'En-Progreso: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro incidunt amet suscipit. ',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description:
                'Terminada: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro incidunt amet suscipit. ',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
};
