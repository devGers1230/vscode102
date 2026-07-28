# Pedimos los datos directamente al usuario
precio_producto = float(input("Ingresa el precio del producto: $"))
descuento_porcentaje = int(input("Ingresa el porcentaje de descuento (%): "))

# Realizamos las operaciones
monto_descuento = precio_producto * (descuento_porcentaje / 100)
precio_final = precio_producto - monto_descuento

# Mostramos los resultados en pantalla
print("\n--- TICKET DE COMPRA ---")
print("Precio original: $" + str(precio_producto))
print("Porcentaje descuento: " + str(descuento_porcentaje) + "%")
print("Descuento aplicado: $" + str(monto_descuento))
print("Total a pagar: $" + str(precio_final))