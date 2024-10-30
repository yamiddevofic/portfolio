// Definición de la interfaz Manual
interface Manual {
    code: string;
    title: string;
    version: string;
    date: string;
    type: string;
    status: string;
}

// Datos Iniciales
let manuals: Manual[] = [
    {
        code: "EGK-24-001",
        title: "Sistema Hidráulico",
        version: "2.1",
        date: "15/03/24",
        type: "Hidráulica",
        status: "Activo"
    },
    {
        code: "EGK-24-002",
        title: "Panel de Control",
        version: "1.0",
        date: "20/02/24",
        type: "Eléctrica", 
        status: "En revisión"
    },
    {
        code: "EGK-24-003",
        title: "Componentes",
        version: "3.2",
        date: "05/01/24",
        type: "Mecánica",
        status: "Activo"
    }
];

// Extraer opciones únicas para los filtros
let types: string[] = [...new Set(manuals.map(m => m.type))];
let statuses: string[] = [...new Set(manuals.map(m => m.status))];

let filterTimeout: number;

// Elementos del DOM
const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
const typeFilter = document.getElementById('typeFilter') as HTMLSelectElement | null;
const statusFilter = document.getElementById('statusFilter') as HTMLSelectElement | null;
const manualsList = document.getElementById('manualsList') as HTMLElement | null;
const noResults = document.getElementById('noResults') as HTMLElement | null;

// Modal y formulario de edición
const editModal = document.getElementById('editModal') as HTMLElement | null;
const editForm = document.getElementById('editForm') as HTMLFormElement | null;
const editCode = document.getElementById('editCode') as HTMLInputElement | null;
const editTitle = document.getElementById('editTitle') as HTMLInputElement | null;
const editVersion = document.getElementById('editVersion') as HTMLInputElement | null;
const editDate = document.getElementById('editDate') as HTMLInputElement | null;
const editType = document.getElementById('editType') as HTMLSelectElement | null;
const editStatus = document.getElementById('editStatus') as HTMLSelectElement | null;
const cancelEdit = document.getElementById('cancelEdit') as HTMLButtonElement | null;

let currentEditingCode: string | null = null;

// Función para renderizar los filtros
function renderFilters(): void {
    if (typeFilter && statusFilter && editType && editStatus) {
        // Renderizar tipos
        typeFilter.innerHTML = `<option value="">Todas las categorías</option>` + types.map(type => `<option value="${type}">${type}</option>`).join('');

        // Renderizar estados
        statusFilter.innerHTML = `<option value="">Todos los estados</option>` + statuses.map(status => `<option value="${status}">${status}</option>`).join('');

        // Renderizar opciones en el modal de edición
        editType.innerHTML = `<option value="">Selecciona un tipo</option>` + types.map(type => `<option value="${type}">${type}</option>`).join('');
        editStatus.innerHTML = `<option value="">Selecciona un estado</option>` + statuses.map(status => `<option value="${status}">${status}</option>`).join('');
    } else {
        console.warn('Elementos de filtro no encontrados.');
    }
}

// Función para renderizar la lista de manuales
function renderManuals(): void {
    if (manualsList) {
        manualsList.innerHTML = manuals.map(manual => `
            <div 
                class="group bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 border border-zinc-100 manual-card"
                data-title="${manual.title.toLowerCase()}"
                data-code="${manual.code.toLowerCase()}"
                data-type="${manual.type}"
                data-status="${manual.status}"
            >
                <div class="flex items-center justify-between gap-6">
                    <div class="flex items-center gap-6">
                        <div class="bg-zinc-50 px-3 py-1.5 rounded-lg font-mono text-sm text-zinc-600">
                            ${manual.code}
                        </div>
                        
                        <div>
                            <h2 class="text-lg font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                                ${manual.title}
                            </h2>
                            <div class="flex items-center gap-4 mt-1 text-sm text-zinc-500">
                                <span>v${manual.version}</span>
                                <span class="w-1 h-1 rounded-full bg-zinc-300"></span>
                                <span>${manual.date}</span>
                                <span class="w-1 h-1 rounded-full bg-zinc-300"></span>
                                <span>${manual.type}</span>
                            </div>
                        </div>
                    </div>

                    <div class="px-3 py-1 rounded-full text-sm ${
                        manual.status === 'Activo' 
                            ? 'bg-green-50 text-green-600' 
                            : 'bg-amber-50 text-amber-600'
                    }">
                        ${manual.status}
                    </div>

                    <button 
                        class="edit-button p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 transition-colors"
                        data-code="${manual.code}"
                    >
                        ✏️ Editar
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        console.warn('Elemento manualsList no encontrado.');
    }
}

// Función principal de filtrado
function filterManuals(): void {
    if (!searchInput || !typeFilter || !statusFilter || !manualsList || !noResults) {
        console.warn('Elementos necesarios para el filtrado no fueron encontrados.');
        return;
    }

    const searchTerm: string = searchInput.value.toLowerCase();
    const selectedType: string = typeFilter.value;
    const selectedStatus: string = statusFilter.value;
    let visibleCount: number = 0;

    // Obtener todas las tarjetas de manuales
    const manualCards: NodeListOf<HTMLElement> = manualsList.querySelectorAll('.manual-card');

    manualCards.forEach((card: HTMLElement) => {
        const title: string = card.dataset.title || '';
        const code: string = card.dataset.code || '';
        const type: string = card.dataset.type || '';
        const status: string = card.dataset.status || '';

        // Aplicar filtros
        const matchesSearch: boolean = title.includes(searchTerm) || code.includes(searchTerm);
        const matchesType: boolean = !selectedType || type === selectedType;
        const matchesStatus: boolean = !selectedStatus || status === selectedStatus;

        // Mostrar u ocultar la tarjeta
        if (matchesSearch && matchesType && matchesStatus) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Mostrar/ocultar mensaje de no resultados
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

// Event listeners con debounce para mejor rendimiento
if (searchInput) {
    searchInput.addEventListener('input', () => {
        clearTimeout(filterTimeout);
        filterTimeout = window.setTimeout(filterManuals, 300);
    });
}

if (typeFilter) {
    typeFilter.addEventListener('change', filterManuals);
}

if (statusFilter) {
    statusFilter.addEventListener('change', filterManuals);
}

// Renderizar filtros y manuales al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos desde localStorage si existen
    const storedManuals: string | null = localStorage.getItem('manuals');
    if (storedManuals) {
        manuals = JSON.parse(storedManuals) as Manual[];
        types = [...new Set(manuals.map(m => m.type))];
        statuses = [...new Set(manuals.map(m => m.status))];
    }

    renderFilters();
    renderManuals();
    filterManuals();
});

// Funcionalidad de Edición
if (manualsList && editModal && editForm && editCode && editTitle && editVersion && editDate && editType && editStatus && cancelEdit) {
    manualsList.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('edit-button') || target.closest('.edit-button')) {
            const button: HTMLElement = target.classList.contains('edit-button') ? target : target.closest('.edit-button') as HTMLElement;
            const code: string | null = button.getAttribute('data-code');
            
            if (code) {
                const manual: Manual | undefined = manuals.find(m => m.code === code);
                if (manual) {
                    currentEditingCode = code;
                    editCode.value = manual.code;
                    editTitle.value = manual.title;
                    editVersion.value = manual.version;

                    // Convertir la fecha al formato YYYY-MM-DD para el input de tipo date
                    const dateParts: string[] = manual.date.split('/');
                    if (dateParts.length === 3) {
                        editDate.value = `20${dateParts[2]}-${dateParts[1].padStart(2, '0')}-${dateParts[0].padStart(2, '0')}`;
                    } else {
                        editDate.value = '';
                    }

                    editType.value = manual.type;
                    editStatus.value = manual.status;
                    editModal.classList.remove('hidden');
                }
            }
        }
    });

    // Cerrar el modal
    cancelEdit.addEventListener('click', () => {
        editModal.classList.add('hidden');
        editForm.reset();
        currentEditingCode = null;
    });

    // Manejar la sumisión del formulario de edición
    editForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        if (currentEditingCode) {
            const manualIndex: number = manuals.findIndex(m => m.code === currentEditingCode);
            if (manualIndex !== -1) {
                // Actualizar los datos del manual
                const updatedTitle: string = editTitle.value.trim();
                const updatedVersion: string = editVersion.value.trim();
                const updatedDate: string = editDate.value;
                const updatedType: string = editType.value;
                const updatedStatus: string = editStatus.value;

                // Validaciones básicas
                if (!updatedTitle || !updatedVersion || !updatedDate || !updatedType || !updatedStatus) {
                    alert('Por favor, completa todos los campos.');
                    return;
                }

                // Convertir la fecha al formato DD/MM/YY
                const date: Date = new Date(updatedDate);
                const day: string = String(date.getDate()).padStart(2, '0');
                const month: string = String(date.getMonth() + 1).padStart(2, '0');
                const year: string = String(date.getFullYear()).slice(-2);
                const formattedDate: string = `${day}/${month}/${year}`;

                // Actualizar el manual
                manuals[manualIndex] = {
                    ...manuals[manualIndex],
                    title: updatedTitle,
                    version: updatedVersion,
                    date: formattedDate,
                    type: updatedType,
                    status: updatedStatus
                };

                // Actualizar filtros si hay cambios en tipos o estados
                if (!types.includes(updatedType)) {
                    types.push(updatedType);
                    renderFilters();
                }
                if (!statuses.includes(updatedStatus)) {
                    statuses.push(updatedStatus);
                    renderFilters();
                }

                // Re-renderizar los manuales y aplicar filtros
                renderManuals();
                filterManuals();

                // Guardar cambios en localStorage
                localStorage.setItem('manuals', JSON.stringify(manuals));

                // Cerrar el modal y resetear el formulario
                editModal.classList.add('hidden');
                editForm.reset();
                currentEditingCode = null;
            }
        }
    });
}
