import { h_cells, h_attack } from "../controllers/humanGB_controller";

// human 

h_cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        var attack = h_attack(cell);
        if (attack) {
            paintAttack(cell);
        }
    });
});

function paintAttack(cell) {
    cell.style = "background-color: transparent";
    cell.innerHTML = `
                    <div class="content">
                        <div class="hit">
                        </div>
                    </div>
                `;
}